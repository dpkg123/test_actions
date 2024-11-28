# CMake generated Testfile for 
# Source directory: /home/user/out/cmake/Utilities/cmcurl
# Build directory: /home/user/out/cmake/1/Utilities/cmcurl
# 
# This file includes the relevant testing commands required for 
# testing this directory and lists subdirectories to be tested as well.
add_test([=[curl]=] "curltest" "http://open.cdash.org/user.php")
set_tests_properties([=[curl]=] PROPERTIES  _BACKTRACE_TRIPLES "/home/user/out/cmake/Utilities/cmcurl/CMakeLists.txt;1994;add_test;/home/user/out/cmake/Utilities/cmcurl/CMakeLists.txt;0;")
subdirs("lib")
