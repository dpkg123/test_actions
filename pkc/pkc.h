#ifndef PKC_H
#define PKC_H

#include <stdio.h>
#include <string.h>
#include <unistd.h>
#include <stdlib.h>
#include <sched.h>
#include <dirent.h>
#include <errno.h>
#include <linux/stat.h>
#include <linux/sched.h>
#include <linux/limits.h>
#include <sys/prctl.h>
#include <sys/mount.h>
#include <sys/stat.h>
#include <sys/sysmacros.h>
#include <sys/wait.h>
#include <sys/ioctl.h>
#include <sys/types.h>
#include <stdbool.h>

#ifndef __linux__
#define _NOLINUX
#else
#include <linux/version.h>

#if LINUX_VERSION_CODE < KERNEL_VERSION(4, 14, 0)
#warning "This program has only used to linux version 4.14.0 or later."
#endif

#define _GNU_SOURCE
#endif

const char* const prog_name = "interface";
const char* const prog_version = "v0.0.1rc2";
enum
{
    BUF_SIZE = (1024 * 1024)
};

#define MAX_COMMANDS (1024)
#define MAX_ENVS (128 * 2)
#define MAX_MOUNTPOINTS (128 * 2)

#endif
