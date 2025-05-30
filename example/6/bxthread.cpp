/////////////////////////////////////////////////////////////////////////
// $Id: bxthread.cc 13298 2017-09-16 22:01:49Z vruppert $
/////////////////////////////////////////////////////////////////////////
//
//  Copyright (C) 2017  The Bochs Project
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
/////////////////////////////////////////////////////////////////////////

#include "bochs.h"
#include "bxthread.h"

// Bochs multi-threading support

void bx_create_event(bx_thread_event_t *thread_ev)
{
#if BX_WITH_SDL || BX_WITH_SDL2
  thread_ev->cond = SDL_CreateCond();
  thread_ev->lock = SDL_CreateMutex();
#elif defined(WIN32)
  thread_ev->event = CreateEvent(NULL, FALSE, FALSE, "event");
#else
  pthread_cond_init(&thread_ev->cond, NULL);
  pthread_mutex_init(&thread_ev->lock, NULL);
#endif
}

void bx_destroy_event(bx_thread_event_t *thread_ev)
{
#if BX_WITH_SDL || BX_WITH_SDL2
  SDL_DestroyCond(thread_ev->cond);
  SDL_DestroyMutex(thread_ev->lock);
#elif defined(WIN32)
  CloseHandle(thread_ev->event);
#else
  pthread_cond_destroy(&thread_ev->cond);
  pthread_mutex_destroy(&thread_ev->lock);
#endif
}

void bx_set_event(bx_thread_event_t *thread_ev)
{
#if BX_WITH_SDL || BX_WITH_SDL2
  SDL_LockMutex(thread_ev->lock);
  SDL_CondSignal(thread_ev->cond);
  SDL_UnlockMutex(thread_ev->lock);
#elif defined(WIN32)
  SetEvent(thread_ev->event);
#else
  pthread_mutex_lock(&thread_ev->lock);
  pthread_cond_signal(&thread_ev->cond);
  pthread_mutex_unlock(&thread_ev->lock);
#endif
}

bx_bool bx_wait_for_event(bx_thread_event_t *thread_ev)
{
#if BX_WITH_SDL || BX_WITH_SDL2
  SDL_LockMutex(thread_ev->lock);
  SDL_CondWait(thread_ev->cond, thread_ev->lock);
  SDL_UnlockMutex(thread_ev->lock);
  return 1;
#elif defined(WIN32)
  if (WaitForSingleObject(thread_ev->event, 1) == WAIT_OBJECT_0) {
    return 1;
  } else {
    return 0;
  }
#else
  pthread_mutex_lock(&thread_ev->lock);
  pthread_cond_wait(&thread_ev->cond, &thread_ev->lock);
  pthread_mutex_unlock(&thread_ev->lock);
  return 1;
#endif
}

bool BOCHSAPI_MSVCONLY bx_create_sem(bx_thread_sem_t *thread_sem)
{
#if BX_WITH_SDL || BX_WITH_SDL2
  thread_sem->sem= SDL_CreateSemaphore(0);
  return thread_sem->sem!=NULL;
#elif defined(WIN32)
  thread_sem->sem = CreateSemaphore(NULL, 0, 1, NULL);
  return thread_sem->sem!=NULL;
#else
  int ret= sem_init(&thread_sem->sem, 0, 0);
  return ret==0;
#endif
}
void BOCHSAPI_MSVCONLY bx_destroy_sem(bx_thread_sem_t *thread_sem)
{
#if BX_WITH_SDL || BX_WITH_SDL2
  SDL_DestroySemaphore(thread_sem->sem);
#elif defined(WIN32)
  CloseHandle(thread_sem->sem);
#else
  sem_destroy(&thread_sem->sem);
#endif
}
void BOCHSAPI_MSVCONLY bx_wait_sem(bx_thread_sem_t *thread_sem)
{
#if BX_WITH_SDL || BX_WITH_SDL2
  SDL_SemWait(thread_sem->sem);
#elif defined(WIN32)
  WaitForSingleObject(thread_sem->sem, INFINITE);
#else
  sem_wait(&thread_sem->sem);
#endif
}
void BOCHSAPI_MSVCONLY bx_set_sem(bx_thread_sem_t *thread_sem)
{
#if BX_WITH_SDL || BX_WITH_SDL2
  SDL_SemPost(thread_sem->sem);
#elif defined(WIN32)
  ReleaseSemaphore(thread_sem->sem, 1, NULL);
#else
  sem_post(&thread_sem->sem);
#endif
}
