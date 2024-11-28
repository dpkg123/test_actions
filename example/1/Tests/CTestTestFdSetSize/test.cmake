cmake_minimum_required(VERSION 3.10)

# Settings:
set(CTEST_DASHBOARD_ROOT                "/home/user/out/cmake/1/Tests/CTestTest")
set(CTEST_SITE                          "localhost")
set(CTEST_BUILD_NAME                    "CTestTest-Linux-c++-FdSetSize")

set(CTEST_SOURCE_DIRECTORY              "/home/user/out/cmake/Tests/CTestTestFdSetSize")
set(CTEST_BINARY_DIRECTORY              "/home/user/out/cmake/1/Tests/CTestTestFdSetSize")
set(CTEST_CVS_COMMAND                   "")
set(CTEST_CMAKE_GENERATOR               "Ninja")
set(CTEST_CMAKE_GENERATOR_PLATFORM      "")
set(CTEST_CMAKE_GENERATOR_TOOLSET       "")
set(CTEST_BUILD_CONFIGURATION           "$ENV{CMAKE_CONFIG_TYPE}")
set(CTEST_COVERAGE_COMMAND              "/bin/gcov")
set(CTEST_NOTES_FILES                   "${CTEST_SCRIPT_DIRECTORY}/${CTEST_SCRIPT_NAME}")

ctest_start(Experimental)
ctest_configure(BUILD "${CTEST_BINARY_DIRECTORY}" RETURN_VALUE res)
message("build")
ctest_build(BUILD "${CTEST_BINARY_DIRECTORY}" RETURN_VALUE res)
message("test")
ctest_test(BUILD "${CTEST_BINARY_DIRECTORY}" PARALLEL_LEVEL 20 RETURN_VALUE res)
message("done")
