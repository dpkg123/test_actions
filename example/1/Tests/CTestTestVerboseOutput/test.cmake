cmake_minimum_required(VERSION 3.10)

# Settings:
set(CTEST_DASHBOARD_ROOT                "/home/user/out/cmake/1/Tests/CTestTest")
set(CTEST_SITE                          "localhost")
set(CTEST_BUILD_NAME                    "CTestTest-Linux-c++-VerboseOutput")

set(CTEST_SOURCE_DIRECTORY              "/home/user/out/cmake/Tests/CTestTestVerboseOutput")
set(CTEST_BINARY_DIRECTORY              "/home/user/out/cmake/1/Tests/CTestTestVerboseOutput")
set(CTEST_CMAKE_GENERATOR               "Ninja")
set(CTEST_CMAKE_GENERATOR_PLATFORM      "")
set(CTEST_CMAKE_GENERATOR_TOOLSET       "")
set(CTEST_BUILD_CONFIGURATION           "$ENV{CMAKE_CONFIG_TYPE}")
set(CTEST_COVERAGE_COMMAND              "/bin/gcov")
set(CTEST_NOTES_FILES                   "${CTEST_SCRIPT_DIRECTORY}/${CTEST_SCRIPT_NAME}")

CTEST_START(Experimental)
CTEST_CONFIGURE(BUILD "${CTEST_BINARY_DIRECTORY}")
CTEST_BUILD(BUILD "${CTEST_BINARY_DIRECTORY}")
CTEST_TEST(BUILD "${CTEST_BINARY_DIRECTORY}")
