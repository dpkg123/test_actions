cmake_minimum_required(VERSION 3.10)

# set the project name
project(stopwatch VERSION 0.1 LANGUAGES CXX)

add_executable(stopwatch main.cpp)
set(CMAKE_C_COMPILER "g++")

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED True)
add_compile_options("-Wno-unused-result")
add_compile_options("-O2")
add_compile_options("-std=c++17")
add_compile_options("-pipe")
add_compile_options("-D_FORTIFY_SOURCE=3 -enable-trivial-auto-var-init-zero-knowing-it-will-be-removed-from-clang -fstack-protector-all")

add_custom_command(
    TARGET stopwatch
    POST_BUILD
    COMMAND strip stopwatch
    VERBATIM
    )


set(CMAKE_EXE_LINKER_FLAGS "-static -flto -z now")
install (TARGETS stopwatch DESTINATION /usr/bin)
