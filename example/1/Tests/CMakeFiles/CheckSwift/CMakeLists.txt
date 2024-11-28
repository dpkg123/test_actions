cmake_minimum_required(VERSION 3.14)
project(CheckSwift Swift)
file(WRITE "${CMAKE_CURRENT_BINARY_DIR}/result.cmake"
  "set(CMAKE_Swift_COMPILER \"${CMAKE_Swift_COMPILER}\")\n"
  "set(CMAKE_Swift_COMPILER_VERSION \"${CMAKE_Swift_COMPILER_VERSION}\")\n"
  "set(CMAKE_Swift_FLAGS \"${CMAKE_Swift_FLAGS}\")\n")
