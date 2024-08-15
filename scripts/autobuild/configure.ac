dnl Example for use of GNU gettext.
dnl This file is in the public domain.
dnl
dnl Configuration file - processed by autoconf.

AC_INIT([hello], [0])
AC_CONFIG_SRCDIR([../src])
AM_INIT_AUTOMAKE([1.11])

AC_PREREQ([2.69])
AC_INIT(OpenJDK, openjdk, build-dev@openjdk.org,,https://openjdk.org)

AC_CONFIG_AUX_DIR([./build-aux])
m4_include([m4/gtk.m4])
m4_include([m4/pkg.m4])

AC_DEFUN_ONCE([CUSTOM_EARLY_HOOK])
AC_DEFUN_ONCE([CUSTOM_LATE_HOOK])
AC_DEFUN_ONCE([CUSTOM_CONFIG_OUTPUT_GENERATED_HOOK])
AC_DEFUN_ONCE([CUSTOM_SUMMARY_AND_WARNINGS_HOOK])

dnl Check whether we can build C# programs at all.
gt_CSHARPCOMP
if test -n "$HAVE_CSHARPCOMP"; then
  BUILDCSHARP=yes
else
  BUILDCSHARP=no
fi
AC_SUBST([BUILDCSHARP])

dnl Check whether we can execute C# programs.
gt_CSHARPEXEC([csharpexec-test.exe], [$srcdir/m4])
if test -n "$HAVE_CSHARPEXEC" && test $BUILDCSHARP = yes; then
  TESTCSHARP=yes
else
  TESTCSHARP=no
fi
AC_SUBST([TESTCSHARP])

dnl Checks for needed libraries.
AM_PATH_PROG_WITH_TEST([GETTEXT_WITH_GNU_GETTEXT_DLL], [gettext],
  [{ basedir=`echo "$ac_dir" | sed -e 's,/bin$,,'`; test -r "$basedir"/lib/GNU.Gettext.dll; }])
if test -z "$GETTEXT_WITH_GNU_GETTEXT_DLL"; then
  echo "Required library GNU.Gettext.dll not found." 1>&2
  exit 1
fi
changequote(,)dnl
basedir=`echo "$GETTEXT_WITH_GNU_GETTEXT_DLL" | sed -e 's,/[^/]*$,,' | sed -e 's,/bin$,,'`
changequote([, ])dnl
GNU_GETTEXT_DLL="$basedir"/lib/GNU.Gettext.dll
GNU_GETTEXT_LDADD="-L $basedir/lib"
GNU_GETTEXT_LIBS="-l GNU.Gettext"
AC_SUBST([GNU_GETTEXT_LDADD])
AC_SUBST([GNU_GETTEXT_LIBS])

HELP_PRINT_ADDITIONAL_HELP_AND_EXIT

# Basic initialization that must happen first of all in the normal process.
BASIC_INIT
BASIC_SETUP_FUNDAMENTAL_TOOLS

BASIC_SETUP_PATHS
BASIC_SETUP_TOOLS
BASIC_SETUP_BUILD_ENV

BASIC_SETUP_DEVKIT

# To properly create a configuration name, we need to have the OpenJDK target
# and options (variants and debug level) parsed.
BASIC_SETUP_OUTPUT_DIR
# After we have the output dir we can finalize the fixpath wrapper
BASIC_WINDOWS_FINALIZE_FIXPATH

# Must be done before we can call HELP_MSG_MISSING_DEPENDENCY.
HELP_SETUP_DEPENDENCY_HELP

# Setup tools that requires more complex handling, or that is not needed by the configure script.
BASIC_SETUP_COMPLEX_TOOLS
BASIC_CHECK_BASH_OPTIONS

# Check if pkg-config is available.
PKG_PROG_PKG_CONFIG

BASIC_TEST_USABILITY_ISSUES

# At the end, call the custom hook. (Dummy macro if no custom sources available)
CUSTOM_LATE_HOOK

# Did user specify any unknown variables?
BASIC_CHECK_LEFTOVER_OVERRIDDEN

# We're messing a bit with internal autoconf variables to put the config.status
# in the output directory instead of the current directory.
CONFIG_STATUS="$CONFIGURESUPPORT_OUTPUTDIR/config.status"

# Create the actual output files. Now the main work of configure is done.
BASIC_WINDOWS_FINALIZE
AC_OUTPUT

# After AC_OUTPUT, we need to do final work
CUSTOM_CONFIG_OUTPUT_GENERATED_HOOK

# Finally output some useful information to the user
HELP_PRINT_SUMMARY_AND_WARNINGS
CUSTOM_SUMMARY_AND_WARNINGS_HOOK
HELP_REPEAT_WARNINGS

# All output is done. Do the post-config output management.
BASIC_POST_CONFIG_OUTPUT

dnl Support for the po directory.
AM_PO_SUBDIRS

AC_CONFIG_FILES([Makefile])
AC_CONFIG_FILES([csharpcomp.sh])
AC_CONFIG_FILES([csharpexec.sh])
AC_CONFIG_FILES([m4/Makefile])
AC_OUTPUT

