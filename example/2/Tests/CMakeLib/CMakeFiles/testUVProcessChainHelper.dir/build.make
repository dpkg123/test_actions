# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.25

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:

#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:

# Disable VCS-based implicit rules.
% : %,v

# Disable VCS-based implicit rules.
% : RCS/%

# Disable VCS-based implicit rules.
% : RCS/%,v

# Disable VCS-based implicit rules.
% : SCCS/s.%

# Disable VCS-based implicit rules.
% : s.%

.SUFFIXES: .hpux_make_needs_suffix_list

# Command-line flag to silence nested $(MAKE).
$(VERBOSE)MAKESILENT = -s

#Suppress display of executed commands.
$(VERBOSE).SILENT:

# A target that is always out of date.
cmake_force:
.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/bin/cmake

# The command to remove a file.
RM = /usr/bin/cmake -E rm -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /home/user/out/cmake

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /home/user/out/cmake/2

# Include any dependencies generated for this target.
include Tests/CMakeLib/CMakeFiles/testUVProcessChainHelper.dir/depend.make
# Include any dependencies generated by the compiler for this target.
include Tests/CMakeLib/CMakeFiles/testUVProcessChainHelper.dir/compiler_depend.make

# Include the progress variables for this target.
include Tests/CMakeLib/CMakeFiles/testUVProcessChainHelper.dir/progress.make

# Include the compile flags for this target's objects.
include Tests/CMakeLib/CMakeFiles/testUVProcessChainHelper.dir/flags.make

Tests/CMakeLib/CMakeFiles/testUVProcessChainHelper.dir/testUVProcessChainHelper.cxx.o: Tests/CMakeLib/CMakeFiles/testUVProcessChainHelper.dir/flags.make
Tests/CMakeLib/CMakeFiles/testUVProcessChainHelper.dir/testUVProcessChainHelper.cxx.o: /home/user/out/cmake/Tests/CMakeLib/testUVProcessChainHelper.cxx
Tests/CMakeLib/CMakeFiles/testUVProcessChainHelper.dir/testUVProcessChainHelper.cxx.o: Tests/CMakeLib/CMakeFiles/testUVProcessChainHelper.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/user/out/cmake/2/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object Tests/CMakeLib/CMakeFiles/testUVProcessChainHelper.dir/testUVProcessChainHelper.cxx.o"
	cd /home/user/out/cmake/2/Tests/CMakeLib && /bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT Tests/CMakeLib/CMakeFiles/testUVProcessChainHelper.dir/testUVProcessChainHelper.cxx.o -MF CMakeFiles/testUVProcessChainHelper.dir/testUVProcessChainHelper.cxx.o.d -o CMakeFiles/testUVProcessChainHelper.dir/testUVProcessChainHelper.cxx.o -c /home/user/out/cmake/Tests/CMakeLib/testUVProcessChainHelper.cxx

Tests/CMakeLib/CMakeFiles/testUVProcessChainHelper.dir/testUVProcessChainHelper.cxx.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/testUVProcessChainHelper.dir/testUVProcessChainHelper.cxx.i"
	cd /home/user/out/cmake/2/Tests/CMakeLib && /bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/user/out/cmake/Tests/CMakeLib/testUVProcessChainHelper.cxx > CMakeFiles/testUVProcessChainHelper.dir/testUVProcessChainHelper.cxx.i

Tests/CMakeLib/CMakeFiles/testUVProcessChainHelper.dir/testUVProcessChainHelper.cxx.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/testUVProcessChainHelper.dir/testUVProcessChainHelper.cxx.s"
	cd /home/user/out/cmake/2/Tests/CMakeLib && /bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/user/out/cmake/Tests/CMakeLib/testUVProcessChainHelper.cxx -o CMakeFiles/testUVProcessChainHelper.dir/testUVProcessChainHelper.cxx.s

# Object files for target testUVProcessChainHelper
testUVProcessChainHelper_OBJECTS = \
"CMakeFiles/testUVProcessChainHelper.dir/testUVProcessChainHelper.cxx.o"

# External object files for target testUVProcessChainHelper
testUVProcessChainHelper_EXTERNAL_OBJECTS =

Tests/CMakeLib/testUVProcessChainHelper: Tests/CMakeLib/CMakeFiles/testUVProcessChainHelper.dir/testUVProcessChainHelper.cxx.o
Tests/CMakeLib/testUVProcessChainHelper: Tests/CMakeLib/CMakeFiles/testUVProcessChainHelper.dir/build.make
Tests/CMakeLib/testUVProcessChainHelper: Source/libCMakeLib.a
Tests/CMakeLib/testUVProcessChainHelper: Utilities/std/libcmstd.a
Tests/CMakeLib/testUVProcessChainHelper: Source/kwsys/libcmsys.a
Tests/CMakeLib/testUVProcessChainHelper: Utilities/cmcurl/lib/libcmcurl.a
Tests/CMakeLib/testUVProcessChainHelper: Utilities/cmnghttp2/libcmnghttp2.a
Tests/CMakeLib/testUVProcessChainHelper: Utilities/cmexpat/libcmexpat.a
Tests/CMakeLib/testUVProcessChainHelper: Utilities/cmlibarchive/libarchive/libcmlibarchive.a
Tests/CMakeLib/testUVProcessChainHelper: /usr/lib/aarch64-linux-gnu/libssl.so
Tests/CMakeLib/testUVProcessChainHelper: /usr/lib/aarch64-linux-gnu/libcrypto.so
Tests/CMakeLib/testUVProcessChainHelper: Utilities/cmbzip2/libcmbzip2.a
Tests/CMakeLib/testUVProcessChainHelper: Utilities/cmliblzma/libcmliblzma.a
Tests/CMakeLib/testUVProcessChainHelper: Utilities/cmzstd/libcmzstd.a
Tests/CMakeLib/testUVProcessChainHelper: Utilities/cmlibrhash/libcmlibrhash.a
Tests/CMakeLib/testUVProcessChainHelper: Utilities/cmlibuv/libcmlibuv.a
Tests/CMakeLib/testUVProcessChainHelper: Utilities/cmzlib/libcmzlib.a
Tests/CMakeLib/testUVProcessChainHelper: Utilities/cmllpkgc/libcmllpkgc.a
Tests/CMakeLib/testUVProcessChainHelper: Utilities/cmcppdap/libcmcppdap.a
Tests/CMakeLib/testUVProcessChainHelper: Utilities/cmjsoncpp/libcmjsoncpp.a
Tests/CMakeLib/testUVProcessChainHelper: Tests/CMakeLib/CMakeFiles/testUVProcessChainHelper.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/home/user/out/cmake/2/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking CXX executable testUVProcessChainHelper"
	cd /home/user/out/cmake/2/Tests/CMakeLib && $(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/testUVProcessChainHelper.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
Tests/CMakeLib/CMakeFiles/testUVProcessChainHelper.dir/build: Tests/CMakeLib/testUVProcessChainHelper
.PHONY : Tests/CMakeLib/CMakeFiles/testUVProcessChainHelper.dir/build

Tests/CMakeLib/CMakeFiles/testUVProcessChainHelper.dir/clean:
	cd /home/user/out/cmake/2/Tests/CMakeLib && $(CMAKE_COMMAND) -P CMakeFiles/testUVProcessChainHelper.dir/cmake_clean.cmake
.PHONY : Tests/CMakeLib/CMakeFiles/testUVProcessChainHelper.dir/clean

Tests/CMakeLib/CMakeFiles/testUVProcessChainHelper.dir/depend:
	cd /home/user/out/cmake/2 && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/user/out/cmake /home/user/out/cmake/Tests/CMakeLib /home/user/out/cmake/2 /home/user/out/cmake/2/Tests/CMakeLib /home/user/out/cmake/2/Tests/CMakeLib/CMakeFiles/testUVProcessChainHelper.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : Tests/CMakeLib/CMakeFiles/testUVProcessChainHelper.dir/depend

