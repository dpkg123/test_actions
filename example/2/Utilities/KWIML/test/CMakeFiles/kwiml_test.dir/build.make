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
include Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/depend.make
# Include any dependencies generated by the compiler for this target.
include Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/compiler_depend.make

# Include the progress variables for this target.
include Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/progress.make

# Include the compile flags for this target's objects.
include Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/flags.make

Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test.c.o: Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/flags.make
Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test.c.o: /home/user/out/cmake/Utilities/KWIML/test/test.c
Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test.c.o: Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/user/out/cmake/2/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building C object Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test.c.o"
	cd /home/user/out/cmake/2/Utilities/KWIML/test && /bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -MD -MT Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test.c.o -MF CMakeFiles/kwiml_test.dir/test.c.o.d -o CMakeFiles/kwiml_test.dir/test.c.o -c /home/user/out/cmake/Utilities/KWIML/test/test.c

Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing C source to CMakeFiles/kwiml_test.dir/test.c.i"
	cd /home/user/out/cmake/2/Utilities/KWIML/test && /bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /home/user/out/cmake/Utilities/KWIML/test/test.c > CMakeFiles/kwiml_test.dir/test.c.i

Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling C source to assembly CMakeFiles/kwiml_test.dir/test.c.s"
	cd /home/user/out/cmake/2/Utilities/KWIML/test && /bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /home/user/out/cmake/Utilities/KWIML/test/test.c -o CMakeFiles/kwiml_test.dir/test.c.s

Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_abi_C.c.o: Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/flags.make
Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_abi_C.c.o: /home/user/out/cmake/Utilities/KWIML/test/test_abi_C.c
Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_abi_C.c.o: Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/user/out/cmake/2/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Building C object Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_abi_C.c.o"
	cd /home/user/out/cmake/2/Utilities/KWIML/test && /bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -MD -MT Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_abi_C.c.o -MF CMakeFiles/kwiml_test.dir/test_abi_C.c.o.d -o CMakeFiles/kwiml_test.dir/test_abi_C.c.o -c /home/user/out/cmake/Utilities/KWIML/test/test_abi_C.c

Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_abi_C.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing C source to CMakeFiles/kwiml_test.dir/test_abi_C.c.i"
	cd /home/user/out/cmake/2/Utilities/KWIML/test && /bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /home/user/out/cmake/Utilities/KWIML/test/test_abi_C.c > CMakeFiles/kwiml_test.dir/test_abi_C.c.i

Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_abi_C.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling C source to assembly CMakeFiles/kwiml_test.dir/test_abi_C.c.s"
	cd /home/user/out/cmake/2/Utilities/KWIML/test && /bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /home/user/out/cmake/Utilities/KWIML/test/test_abi_C.c -o CMakeFiles/kwiml_test.dir/test_abi_C.c.s

Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_int_C.c.o: Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/flags.make
Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_int_C.c.o: /home/user/out/cmake/Utilities/KWIML/test/test_int_C.c
Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_int_C.c.o: Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/user/out/cmake/2/CMakeFiles --progress-num=$(CMAKE_PROGRESS_3) "Building C object Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_int_C.c.o"
	cd /home/user/out/cmake/2/Utilities/KWIML/test && /bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -MD -MT Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_int_C.c.o -MF CMakeFiles/kwiml_test.dir/test_int_C.c.o.d -o CMakeFiles/kwiml_test.dir/test_int_C.c.o -c /home/user/out/cmake/Utilities/KWIML/test/test_int_C.c

Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_int_C.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing C source to CMakeFiles/kwiml_test.dir/test_int_C.c.i"
	cd /home/user/out/cmake/2/Utilities/KWIML/test && /bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /home/user/out/cmake/Utilities/KWIML/test/test_int_C.c > CMakeFiles/kwiml_test.dir/test_int_C.c.i

Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_int_C.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling C source to assembly CMakeFiles/kwiml_test.dir/test_int_C.c.s"
	cd /home/user/out/cmake/2/Utilities/KWIML/test && /bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /home/user/out/cmake/Utilities/KWIML/test/test_int_C.c -o CMakeFiles/kwiml_test.dir/test_int_C.c.s

Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_include_C.c.o: Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/flags.make
Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_include_C.c.o: /home/user/out/cmake/Utilities/KWIML/test/test_include_C.c
Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_include_C.c.o: Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/user/out/cmake/2/CMakeFiles --progress-num=$(CMAKE_PROGRESS_4) "Building C object Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_include_C.c.o"
	cd /home/user/out/cmake/2/Utilities/KWIML/test && /bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -MD -MT Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_include_C.c.o -MF CMakeFiles/kwiml_test.dir/test_include_C.c.o.d -o CMakeFiles/kwiml_test.dir/test_include_C.c.o -c /home/user/out/cmake/Utilities/KWIML/test/test_include_C.c

Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_include_C.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing C source to CMakeFiles/kwiml_test.dir/test_include_C.c.i"
	cd /home/user/out/cmake/2/Utilities/KWIML/test && /bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /home/user/out/cmake/Utilities/KWIML/test/test_include_C.c > CMakeFiles/kwiml_test.dir/test_include_C.c.i

Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_include_C.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling C source to assembly CMakeFiles/kwiml_test.dir/test_include_C.c.s"
	cd /home/user/out/cmake/2/Utilities/KWIML/test && /bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /home/user/out/cmake/Utilities/KWIML/test/test_include_C.c -o CMakeFiles/kwiml_test.dir/test_include_C.c.s

Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_abi_CXX.cxx.o: Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/flags.make
Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_abi_CXX.cxx.o: /home/user/out/cmake/Utilities/KWIML/test/test_abi_CXX.cxx
Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_abi_CXX.cxx.o: Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/user/out/cmake/2/CMakeFiles --progress-num=$(CMAKE_PROGRESS_5) "Building CXX object Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_abi_CXX.cxx.o"
	cd /home/user/out/cmake/2/Utilities/KWIML/test && /bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_abi_CXX.cxx.o -MF CMakeFiles/kwiml_test.dir/test_abi_CXX.cxx.o.d -o CMakeFiles/kwiml_test.dir/test_abi_CXX.cxx.o -c /home/user/out/cmake/Utilities/KWIML/test/test_abi_CXX.cxx

Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_abi_CXX.cxx.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/kwiml_test.dir/test_abi_CXX.cxx.i"
	cd /home/user/out/cmake/2/Utilities/KWIML/test && /bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/user/out/cmake/Utilities/KWIML/test/test_abi_CXX.cxx > CMakeFiles/kwiml_test.dir/test_abi_CXX.cxx.i

Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_abi_CXX.cxx.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/kwiml_test.dir/test_abi_CXX.cxx.s"
	cd /home/user/out/cmake/2/Utilities/KWIML/test && /bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/user/out/cmake/Utilities/KWIML/test/test_abi_CXX.cxx -o CMakeFiles/kwiml_test.dir/test_abi_CXX.cxx.s

Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_int_CXX.cxx.o: Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/flags.make
Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_int_CXX.cxx.o: /home/user/out/cmake/Utilities/KWIML/test/test_int_CXX.cxx
Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_int_CXX.cxx.o: Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/user/out/cmake/2/CMakeFiles --progress-num=$(CMAKE_PROGRESS_6) "Building CXX object Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_int_CXX.cxx.o"
	cd /home/user/out/cmake/2/Utilities/KWIML/test && /bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_int_CXX.cxx.o -MF CMakeFiles/kwiml_test.dir/test_int_CXX.cxx.o.d -o CMakeFiles/kwiml_test.dir/test_int_CXX.cxx.o -c /home/user/out/cmake/Utilities/KWIML/test/test_int_CXX.cxx

Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_int_CXX.cxx.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/kwiml_test.dir/test_int_CXX.cxx.i"
	cd /home/user/out/cmake/2/Utilities/KWIML/test && /bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/user/out/cmake/Utilities/KWIML/test/test_int_CXX.cxx > CMakeFiles/kwiml_test.dir/test_int_CXX.cxx.i

Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_int_CXX.cxx.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/kwiml_test.dir/test_int_CXX.cxx.s"
	cd /home/user/out/cmake/2/Utilities/KWIML/test && /bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/user/out/cmake/Utilities/KWIML/test/test_int_CXX.cxx -o CMakeFiles/kwiml_test.dir/test_int_CXX.cxx.s

Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_include_CXX.cxx.o: Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/flags.make
Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_include_CXX.cxx.o: /home/user/out/cmake/Utilities/KWIML/test/test_include_CXX.cxx
Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_include_CXX.cxx.o: Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/user/out/cmake/2/CMakeFiles --progress-num=$(CMAKE_PROGRESS_7) "Building CXX object Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_include_CXX.cxx.o"
	cd /home/user/out/cmake/2/Utilities/KWIML/test && /bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_include_CXX.cxx.o -MF CMakeFiles/kwiml_test.dir/test_include_CXX.cxx.o.d -o CMakeFiles/kwiml_test.dir/test_include_CXX.cxx.o -c /home/user/out/cmake/Utilities/KWIML/test/test_include_CXX.cxx

Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_include_CXX.cxx.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/kwiml_test.dir/test_include_CXX.cxx.i"
	cd /home/user/out/cmake/2/Utilities/KWIML/test && /bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/user/out/cmake/Utilities/KWIML/test/test_include_CXX.cxx > CMakeFiles/kwiml_test.dir/test_include_CXX.cxx.i

Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_include_CXX.cxx.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/kwiml_test.dir/test_include_CXX.cxx.s"
	cd /home/user/out/cmake/2/Utilities/KWIML/test && /bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/user/out/cmake/Utilities/KWIML/test/test_include_CXX.cxx -o CMakeFiles/kwiml_test.dir/test_include_CXX.cxx.s

# Object files for target kwiml_test
kwiml_test_OBJECTS = \
"CMakeFiles/kwiml_test.dir/test.c.o" \
"CMakeFiles/kwiml_test.dir/test_abi_C.c.o" \
"CMakeFiles/kwiml_test.dir/test_int_C.c.o" \
"CMakeFiles/kwiml_test.dir/test_include_C.c.o" \
"CMakeFiles/kwiml_test.dir/test_abi_CXX.cxx.o" \
"CMakeFiles/kwiml_test.dir/test_int_CXX.cxx.o" \
"CMakeFiles/kwiml_test.dir/test_include_CXX.cxx.o"

# External object files for target kwiml_test
kwiml_test_EXTERNAL_OBJECTS =

Utilities/KWIML/test/kwiml_test: Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test.c.o
Utilities/KWIML/test/kwiml_test: Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_abi_C.c.o
Utilities/KWIML/test/kwiml_test: Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_int_C.c.o
Utilities/KWIML/test/kwiml_test: Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_include_C.c.o
Utilities/KWIML/test/kwiml_test: Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_abi_CXX.cxx.o
Utilities/KWIML/test/kwiml_test: Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_int_CXX.cxx.o
Utilities/KWIML/test/kwiml_test: Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/test_include_CXX.cxx.o
Utilities/KWIML/test/kwiml_test: Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/build.make
Utilities/KWIML/test/kwiml_test: Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/home/user/out/cmake/2/CMakeFiles --progress-num=$(CMAKE_PROGRESS_8) "Linking CXX executable kwiml_test"
	cd /home/user/out/cmake/2/Utilities/KWIML/test && $(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/kwiml_test.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/build: Utilities/KWIML/test/kwiml_test
.PHONY : Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/build

Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/clean:
	cd /home/user/out/cmake/2/Utilities/KWIML/test && $(CMAKE_COMMAND) -P CMakeFiles/kwiml_test.dir/cmake_clean.cmake
.PHONY : Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/clean

Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/depend:
	cd /home/user/out/cmake/2 && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/user/out/cmake /home/user/out/cmake/Utilities/KWIML/test /home/user/out/cmake/2 /home/user/out/cmake/2/Utilities/KWIML/test /home/user/out/cmake/2/Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : Utilities/KWIML/test/CMakeFiles/kwiml_test.dir/depend

