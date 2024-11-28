/////////////////////////////////////////////////////////////////////////
// $Id: slowdown_timer.cc 12081 2013-12-29 12:56:52Z vruppert $
/////////////////////////////////////////////////////////////////////////
//
//  Copyright (C) 2002-2009  The Bochs Project
//
//  This library is free software; you can redistribute it and/or
//  modify it under the terms of the GNU Lesser General Public
//  License as published by the Free Software Foundation; either
//  version 2 of the License, or (at your option) any later version.
//
//  This library is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
//  Lesser General Public License for more details.
//
//  You should have received a copy of the GNU Lesser General Public
//  License along with this library; if not, write to the Free Software
//  Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301 USA
//
/////////////////////////////////////////////////////////////////////////

#include "bochs.h"
#include "param_names.h"
#include "slowdown_timer.h"
//LB
#include "cpu/cpu.h"

#include <errno.h>
#if !defined(_MSC_VER)
#include <unistd.h>
#endif


//These need to stay printfs because they are useless in the log file.
#define BX_SLOWDOWN_PRINTF_FEEDBACK 0

#define SECINUSEC 1000000
#define usectosec(a) ((a)/SECINUSEC)
#define sectousec(a) ((a)*SECINUSEC)
#define nsectousec(a) ((a)/1000)

#define MSECINUSEC 1000
#define usectomsec(a) ((a)/MSECINUSEC)

#define Qval 1000
#define MAXMULT 1.5
#define REALTIME_Q SECINUSEC

#define LOG_THIS bx_slowdown_timer.

bx_slowdown_timer_c bx_slowdown_timer;

bx_slowdown_timer_c::bx_slowdown_timer_c()
{
  put("slowdown_timer", "STIMER");

  s.start_time=0;
  s.start_emulated_time=0;
  s.timer_handle=BX_NULL_TIMER_HANDLE;
#ifdef BX_ANDROID
  theInstance= this;
  sleepTime= 0;
#endif
}

void bx_slowdown_timer_c::init(void)
{
  // Return early if slowdown timer not selected
  if ((SIM->get_param_enum(BXPN_CLOCK_SYNC)->get() != BX_CLOCK_SYNC_SLOWDOWN) &&
      (SIM->get_param_enum(BXPN_CLOCK_SYNC)->get() != BX_CLOCK_SYNC_BOTH))
	isActive= false;
  else
  	isActive= true;

  BX_INFO(("using 'slowdown' timer synchronization method"));
  s.MAXmultiplier=MAXMULT;
  s.Q=Qval;

  if(s.MAXmultiplier<1)
    s.MAXmultiplier=1;

  s.start_time=sectousec(time(NULL));
  s.start_emulated_time = bx_pc_system.time_usec();
  if (s.timer_handle == BX_NULL_TIMER_HANDLE) {
    s.timer_handle=bx_pc_system.register_timer(this, timer_handler, 100 , 1, 1,
      "slowdown_timer");
  }
  bx_pc_system.deactivate_timer(s.timer_handle);
//  bx_pc_system.activate_timer(s.timer_handle,(Bit32u)s.Q,0);
  bx_pc_system.activate_timer(s.timer_handle,(Bit32u)s.Q,1);
}

void bx_slowdown_timer_c::exit(void)
{
  s.timer_handle = BX_NULL_TIMER_HANDLE;
}

void bx_slowdown_timer_c::after_restore_state(void)
{
  s.start_emulated_time = bx_pc_system.time_usec();
}

void bx_slowdown_timer_c::timer_handler(void * this_ptr)
{
  bx_slowdown_timer_c * class_ptr = (bx_slowdown_timer_c *) this_ptr;
  class_ptr->handle_timer();
}

void bx_slowdown_timer_c::handle_timer()
{
  if (!isActive && !BX_CPU_C::isHalted())
    return;

  Bit64u elapsedEmuTime = bx_pc_system.time_usec() - s.start_emulated_time;
  Bit64u elapsedRealTime = sectousec(time(NULL)) - s.start_time;

  if (elapsedEmuTime <= elapsedRealTime)
    return;

#if BX_HAVE_USLEEP
  usleep(s.Q);
#elif BX_HAVE_MSLEEP
  msleep(usectomsec((Bit32u)s.Q));
#elif BX_HAVE_SLEEP
  sleep(usectosec(s.Q));
#else
#error do not know have to sleep
#endif
}

#ifdef BX_ANDROID
bx_slowdown_timer_c *bx_slowdown_timer_c::theInstance;
void bx_slowdown_timer_c::handleSuspend()
{
	sleepTime= time(NULL);
}
void bx_slowdown_timer_c::handleResume()
{
	if (sleepTime==0)
		return;
	Bit32u diff= time(NULL)-sleepTime;
	s.start_time+= sectousec(diff);;
	sleepTime= 0;
}
#endif
