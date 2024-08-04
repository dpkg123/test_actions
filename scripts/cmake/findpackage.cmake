include(CheckIncludeFileCXX)
include(CheckIncludeFile)

find_package(Perl)
find_package(Python)
if(NOT PERL_FOUND)
    message(FATAL_ERROR "Cannot build test suites without Perl")
endif()
if(NOT PYTHON_FOUND)
    message(FATAL_ERROR "Cannot build test suites without Python")
endif()

if(RURI_LIB)
    find_package(PkgConfig)
    if(NOT PKG_CONFIG_FOUND)
        message(WARNING "pkg-config not found, library detection might be limited")
    endif()
endif()

check_include_file("linux/version.h" VERSION_H_FOUND)
check_include_file("unistd.h" UNISTD_H_FOUND)
check_include_file("time.h" TIME_H_FOUND)
check_include_file("dirent.h" DIRENT_H_FOUND)


if(CMAKE_GENERATOR STREQUAL "Ninja")
    execute_process(COMMAND ninja --version OUTPUT_VARIABLE NINJA_VERSION OUTPUT_STRIP_TRAILING_WHITESPACE)
    message(STATUS "Selecting build system Ninja (version ${NINJA_VERSION})")
else()
    execute_process(COMMAND make --version OUTPUT_VARIABLE MAKE_VERSION OUTPUT_STRIP_TRAILING_WHITESPACE)
    message(STATUS "Selecting build system GNU make (version ${MAKE_VERSION})")
endif()

