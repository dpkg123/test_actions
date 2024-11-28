# CMake generated Testfile for 
# Source directory: /home/user/out/cmake/Tests/CheckSourceTree
# Build directory: /home/user/out/cmake/2/Tests/CheckSourceTree
# 
# This file includes the relevant testing commands required for 
# testing this directory and lists subdirectories to be tested as well.
add_test([=[CMake.CheckSourceTree]=] "/home/user/out/cmake/2/bin/cmake" "-D" "GIT_EXECUTABLE=/bin/git" "-D" "CMake_SOURCE_DIR=/home/user/out/cmake" "-P" "/home/user/out/cmake/Tests/CheckSourceTree/check.cmake")
set_tests_properties([=[CMake.CheckSourceTree]=] PROPERTIES  RUN_SERIAL "1" _BACKTRACE_TRIPLES "/home/user/out/cmake/Tests/CheckSourceTree/CMakeLists.txt;1;add_test;/home/user/out/cmake/Tests/CheckSourceTree/CMakeLists.txt;0;")
