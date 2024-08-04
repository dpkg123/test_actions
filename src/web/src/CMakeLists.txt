cmake_minimum_required(VERSION 3.10)

# set the project name
project(WebServer LANGUAGES CXX)
set(CMAKE_CXX_COMPILER "g++")

# add cxx standard
set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED True)
add_compile_options("-Wno-unused-result")
add_compile_options("-O2")
add_compile_options("-std=c++11")
add_compile_options("-pipe")
add_compile_options("-D_FORTIFY_SOURCE=3 -enable-trivial-auto-var-init-zero-knowing-it-will-be-removed-from-clang -fstack-protector-all")


# add the executable
file(GLOB SOURCES ${CMAKE_SOURCE_DIR}/*.cpp)
add_executable(WebServer ${SOURCES})
add_custom_command(
    TARGET WebServer
    POST_BUILD
    COMMAND strip WebServer
    VERBATIM
    )

# Configure CCache if available
find_program(CCACHE_FOUND ccache)
if(CCACHE_FOUND)
    set_property(GLOBAL PROPERTY RULE_LAUNCH_COMPILE ccache)
    set_property(GLOBAL PROPERTY RULE_LAUNCH_LINK ccache)
endif(CCACHE_FOUND)

# add cxx flags
set(CMAKE_EXE_LINKER_FLAGS "-ffunction-sections -fdata-sections -z now -z noexecstack -fPIE -Wall -Wextra -pedantic -flto -pthread")
install (TARGETS WebServer DESTINATION /usr/bin)
