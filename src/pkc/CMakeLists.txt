cmake_minimum_required(VERSION 3.10)

# set the project name
project(pkc VERSION 0.1 LANGUAGES C)

add_executable(pkc pkc.c)
set(CMAKE_C_COMPILER "gcc")

set(CMAKE_C_STANDARD 17)
set(CMAKE_C_STANDARD_REQUIRED True)
add_compile_options("-Wno-unused-result")
add_compile_options("-O2")
add_compile_options("-pipe")
add_compile_options("-D_FORTIFY_SOURCE=3 -enable-trivial-auto-var-init-zero-knowing-it-will-be-removed-from-clang -fstack-protector-all")

add_custom_command(
    TARGET pkc
    POST_BUILD
    COMMAND strip pkc
    VERBATIM
    )


set(CMAKE_EXE_LINKER_FLAGS "-static -flto -z now")
install (TARGETS pkc DESTINATION /usr/bin)
