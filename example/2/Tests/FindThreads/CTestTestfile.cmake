# CMake generated Testfile for 
# Source directory: /home/user/out/cmake/Tests/FindThreads
# Build directory: /home/user/out/cmake/2/Tests/FindThreads
# 
# This file includes the relevant testing commands required for 
# testing this directory and lists subdirectories to be tested as well.
add_test([=[FindThreads.C-only]=] "/home/user/out/cmake/2/bin/ctest" "--build-and-test" "/home/user/out/cmake/Tests/FindThreads/C-only" "/home/user/out/cmake/2/Tests/FindThreads/C-only" "--build-generator" "Unix Makefiles" "--build-makeprogram" "/bin/gmake" "--build-project" "FindThreads_C-only" "--build-options" "--test-command" "/home/user/out/cmake/2/bin/ctest" "-V")
set_tests_properties([=[FindThreads.C-only]=] PROPERTIES  _BACKTRACE_TRIPLES "/home/user/out/cmake/Tests/FindThreads/CMakeLists.txt;2;add_test;/home/user/out/cmake/Tests/FindThreads/CMakeLists.txt;0;")
add_test([=[FindThreads.CXX-only]=] "/home/user/out/cmake/2/bin/ctest" "--build-and-test" "/home/user/out/cmake/Tests/FindThreads/CXX-only" "/home/user/out/cmake/2/Tests/FindThreads/CXX-only" "--build-generator" "Unix Makefiles" "--build-makeprogram" "/bin/gmake" "--build-project" "FindThreads_CXX-only" "--build-options" "--test-command" "/home/user/out/cmake/2/bin/ctest" "-V")
set_tests_properties([=[FindThreads.CXX-only]=] PROPERTIES  _BACKTRACE_TRIPLES "/home/user/out/cmake/Tests/FindThreads/CMakeLists.txt;2;add_test;/home/user/out/cmake/Tests/FindThreads/CMakeLists.txt;0;")
