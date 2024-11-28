# CMake generated Testfile for 
# Source directory: /home/user/out/cmake
# Build directory: /home/user/out/cmake/2
# 
# This file includes the relevant testing commands required for 
# testing this directory and lists subdirectories to be tested as well.
include("/home/user/out/cmake/2/Tests/EnforceConfig.cmake")
add_test([=[SystemInformationNew]=] "/home/user/out/cmake/2/bin/cmake" "--system-information" "-G" "Unix Makefiles")
set_tests_properties([=[SystemInformationNew]=] PROPERTIES  _BACKTRACE_TRIPLES "/home/user/out/cmake/CMakeLists.txt;529;add_test;/home/user/out/cmake/CMakeLists.txt;0;")
subdirs("Source/kwsys")
subdirs("Utilities/std")
subdirs("Utilities/KWIML")
subdirs("Utilities/cmlibrhash")
subdirs("Utilities/cmzlib")
subdirs("Utilities/cmcurl")
subdirs("Utilities/cmnghttp2")
subdirs("Utilities/cmexpat")
subdirs("Utilities/cmbzip2")
subdirs("Utilities/cmzstd")
subdirs("Utilities/cmliblzma")
subdirs("Utilities/cmlibarchive")
subdirs("Utilities/cmjsoncpp")
subdirs("Utilities/cmlibuv")
subdirs("Source/CursesDialog/form")
subdirs("Utilities/cmcppdap")
subdirs("Utilities/cmllpkgc")
subdirs("Source")
subdirs("Utilities")
subdirs("Tests")
subdirs("Auxiliary")
