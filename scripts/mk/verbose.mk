#!/bin/make ?f

CCCOLOR     = \033[1;38;2;254;228;208m
STRIPCOLOR  = \033[1;38;2;254;228;208m
BINCOLOR    = \033[34;1m
ENDCOLOR    = \033[0m

PREFIX = /usr/local/

ifeq ("$(origin DESTDIR)", "command line")
  DESTDIR = $(PREFIX)
endif

ifeq ("$(origin VERBOSE)", "command line")
  BUILD_VERBOSE = $(VERBOSE)
endif
ifndef BUILD_VERBOSE
  BUILD_VERBOSE = 0
endif

ifeq ($(BUILD_VERBOSE),1)
  Q =
else
  Q = @
endif

