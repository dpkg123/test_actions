cmake_minimum_required(VERSION 3.10)

# Settings:
set(CTEST_DASHBOARD_ROOT                "/home/user/out/cmake/1/Tests/CTestTest")
set(CTEST_SITE                          "localhost")
set(CTEST_BUILD_NAME                    "CTestTest-Linux-c++-StopTime")

set(CTEST_SOURCE_DIRECTORY              "/home/user/out/cmake/Tests/CTestTestStopTime")
set(CTEST_BINARY_DIRECTORY              "/home/user/out/cmake/1/Tests/CTestTestStopTime")
set(CTEST_CVS_COMMAND                   "")
set(CTEST_CMAKE_GENERATOR               "Ninja")
set(CTEST_CMAKE_GENERATOR_PLATFORM      "")
set(CTEST_CMAKE_GENERATOR_TOOLSET       "")
set(CTEST_BUILD_CONFIGURATION           "$ENV{CMAKE_CONFIG_TYPE}")
set(CTEST_COVERAGE_COMMAND              "/bin/gcov")
set(CTEST_NOTES_FILES                   "${CTEST_SCRIPT_DIRECTORY}/${CTEST_SCRIPT_NAME}")

#CTEST_EMPTY_BINARY_DIRECTORY(${CTEST_BINARY_DIRECTORY})

include("${CTEST_BINARY_DIRECTORY}/GetDate.cmake")

CTEST_START(Experimental)
CTEST_CONFIGURE(BUILD "${CTEST_BINARY_DIRECTORY}" RETURN_VALUE res)
CTEST_BUILD(BUILD "${CTEST_BINARY_DIRECTORY}" RETURN_VALUE res)

GET_DATE()
message("curr time: ${${GD_PREFIX}HOUR}:${${GD_PREFIX}MINUTE}:${${GD_PREFIX}SECOND}")
ADD_SECONDS(15)
message("stop time: ${new_hr}:${new_min}:${new_sec}")

CTEST_TEST(BUILD "${CTEST_BINARY_DIRECTORY}" RETURN_VALUE res STOP_TIME "${new_hr}:${new_min}:${new_sec}")

#CTEST_SUBMIT()
