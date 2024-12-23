/////////////////////////////////////////////////////////////////////////
// $Id: slowdown_timer.h 10209 2011-02-24 22:05:47Z sshwarts $
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

#ifndef BX_IODEV_SLOWDOWN_TIMER_H
#define BX_IODEV_SLOWDOWN_TIMER_H

class bx_slowdown_timer_c : public logfunctions {
private:
  bool isActive;
  struct {
    Bit64u start_time;
    Bit64u start_emulated_time;

    int timer_handle;

    float MAXmultiplier;
    Bit64u Q; // sleep rate in usec
  } s;

public:
  bx_slowdown_timer_c();

  void init(void);
  void exit(void);
  void after_restore_state(void);

  static void timer_handler(void * this_ptr);

  void handle_timer();

#ifdef BX_ANDROID
  private:
  Bit32u sleepTime;
  public:
  static bx_slowdown_timer_c *theInstance;
  void handleSuspend();
  void handleResume();
  //void unlockSpeed(bool flag);
#endif

};

extern bx_slowdown_timer_c bx_slowdown_timer;

#endif
