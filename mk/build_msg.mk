$(info -- ████████████████████████████████████)
$(info -- ██████████████████▓░░░░░░░░░░░░░░░██)
$(info -- ██████████████████▓░░░░░░░░░░░░░░░██)
$(info -- ██████████████████▓░░░░░░░░░░░░░░░██)
$(info -- ██████████████████▓░░░░░░░░░░░░░░░██)
$(info -- ██████████████████▓░░░░░░░░░░░░░░░██)
$(info -- ██████████████████▓░░░░░░░░░░░░░░░██)
$(info -- ██████████████████▓░░░░░░░░░░░░░░░██)
$(info -- ███████████████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██)
$(info -- ██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓██████████████████)
$(info -- ██░░░░░░░░░░░░░░░▓██████████████████)
$(info -- ██░░░░░░░░░░░░░░░▓██████████████████)
$(info -- ██░░░░░░░░░░░░░░░▓██████████████████)
$(info -- ██░░░░░░░░░░░░░░░▓██████████████████)
$(info -- ██░░░░░░░░░░░░░░░▓██████████████████)
$(info -- ██░░░░░░░░░░░░░░░▓██████████████████)
$(info -- ██░░░░░░░░░░░░░░░▓██████████████████)
$(info -- ████████████████████████████████████)

ifeq ($(shell test -e $(srctree)/$(src)/../.git; echo $$?),0)
$(shell cd $(srctree)/$(src); /usr/bin/env PATH="$$PATH":/usr/bin:/usr/local/bin [ -f ../.git/shallow ] && git fetch --unshallow)
KSU_GIT_VERSION := $(shell cd $(srctree)/$(src); /usr/bin/env PATH="$$PATH":/usr/bin:/usr/local/bin git rev-list --count HEAD)
# ksu_version: major * 10000 + git version + 200 for historical reasons
$(eval KSU_VERSION=$(shell expr 10000 + $(KSU_GIT_VERSION) + 200))
$(info -- KernelSU version: $(KSU_VERSION))
ccflags-y += -DKSU_VERSION=$(KSU_VERSION)
else # If there is no .git file, the default version will be passed.
$(warning "KSU_GIT_VERSION not defined! It is better to make KernelSU a git submodule!")
ccflags-y += -DKSU_VERSION=16
endif

ifeq ($(shell grep -q " current_sid(void)" $(srctree)/security/selinux/include/objsec.h; echo $$?),0)
ccflags-y += -DKSU_COMPAT_HAS_CURRENT_SID
endif

ifeq ($(shell grep -q "struct selinux_state " $(srctree)/security/selinux/include/security.h; echo $$?),0)
ccflags-y += -DKSU_COMPAT_HAS_SELINUX_STATE
endif

ifndef KSU_EXPECTED_SIZE
KSU_EXPECTED_SIZE := 0x033b
endif

ifndef KSU_EXPECTED_HASH
KSU_EXPECTED_HASH := c371061b19d8c7d7d6133c6a9bafe198fa944e50c1b31c9d8daa8d7f1fc2d2d6
endif

ifdef KSU_MANAGER_PACKAGE
ccflags-y += -DKSU_MANAGER_PACKAGE=\"$(KSU_MANAGER_PACKAGE)\"
$(info -- KernelSU Manager package name: $(KSU_MANAGER_PACKAGE))
endif

$(info -- KernelSU Manager signature size: $(KSU_EXPECTED_SIZE))
$(info -- KernelSU Manager signature hash: $(KSU_EXPECTED_HASH))

ccflags-y += -DEXPECTED_SIZE=$(KSU_EXPECTED_SIZE)
ccflags-y += -DEXPECTED_HASH=\"$(KSU_EXPECTED_HASH)\"

ifeq ($(shell grep -q "int path_umount" $(srctree)/fs/namespace.c; echo $$?),0)
ccflags-y += -DKSU_UMOUNT
else
$(info --  _________________________________________)
$(info -- / Did you know you can backport           \)
$(info -- \ path_umount to fs/namespace.c from 5.9? /)
$(info --  -----------------------------------------)
$(info --         \   ^__^)
$(info --          \  (oo)\_______)
$(info --             (__)\       $(CLOSE_PARENTHESES)\/\)
$(info --                 ||----w |)
$(info --                 ||     ||)
$(info -- Read: https://kernelsu.org/guide/how-to-integrate-for-non-gki.html#backport-path_umount-from-linux-59)
endif
