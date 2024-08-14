cmake_minimum_required(VERSION 3.11)
project(cxxtest LANGUAGES CXX)

if(NOT TARGET spdlog)
    find_package(spdlog REQUIRED)
endif()

find_package(PkgConfig)
if(PkgConfig_FOUND)
    pkg_check_modules(systemd libsystemd)
endif()

find_package(Catch2 3 QUIET)
if(Catch2_FOUND)
    message(STATUS "Packaged version of Catch will be used.")
else()
    message(STATUS "Bundled version of Catch will be downloaded and used.")
    include(FetchContent)
    FetchContent_Declare(Catch2
            GIT_REPOSITORY https://github.com/catchorg/Catch2.git
            GIT_TAG 53d0d913a422d356b23dd927547febdf69ee9081 # v3.5.0
    )
    FetchContent_MakeAvailable(Catch2)
endif()

enable_testing()
