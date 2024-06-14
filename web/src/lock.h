#pragma once

#include <exception>
#include <iostream>
#include <semaphore.h>
#include <stdexcept>
class lock
{
  private:
    sem_t sem;

  public:
    explicit lock(int pshared, unsigned value)
    {

        sem_init(&sem, pshared, value);
    }
    ~lock()
    {
        sem_destroy(&sem);
    }
    bool wait()
    {
        int ret = sem_wait(&sem);
        return ret == 0;
    }
    bool signal()
    {
        int ret = sem_post(&sem);
        return ret == 0;
    }
};
