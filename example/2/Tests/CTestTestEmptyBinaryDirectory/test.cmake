cmake_minimum_required(VERSION 3.10)

set(CTEST_SOURCE_DIRECTORY "/home/user/out/cmake/Tests/CTestTestEmptyBinaryDirectory")
set(CTEST_BINARY_DIRECTORY "/home/user/out/cmake/2/Tests/CTestTestEmptyBinaryDirectory")

# make sure ctest does not remove directories without a CMakeCache.txt in it
set(EMPTY_BINARY_DIR "${CTEST_BINARY_DIRECTORY}/empty_binary_dir")
file(MAKE_DIRECTORY "${EMPTY_BINARY_DIR}")

if(NOT EXISTS "${EMPTY_BINARY_DIR}"
  OR EXISTS "${EMPTY_BINARY_DIR}/CMakeCache.txt")
    message(FATAL_ERROR "empty_binary_dir precondition failed")
endif()

ctest_empty_binary_directory("${EMPTY_BINARY_DIR}")

if(NOT EXISTS "${EMPTY_BINARY_DIR}")
  message(FATAL_ERROR "empty_binary_dir should not have been removed")
endif()

# make sure ctest does remove directories with a CMakeCache.txt
set(VALID_BINARY_DIR "${CTEST_BINARY_DIRECTORY}/valid_binary_dir")
file(MAKE_DIRECTORY "${VALID_BINARY_DIR}")
file(WRITE "${VALID_BINARY_DIR}/CMakeCache.txt")

if(NOT EXISTS "${VALID_BINARY_DIR}"
  OR NOT EXISTS "${VALID_BINARY_DIR}/CMakeCache.txt")
    message(FATAL_ERROR "valid_binary_dir precondition failed")
endif()

ctest_empty_binary_directory("${VALID_BINARY_DIR}")

if(EXISTS "${VALID_BINARY_DIR}")
  message(FATAL_ERROR "valid_binary_dir should have been removed")
endif()

# make sure ctest removes build directories recursively
set(DEEP_BINARY_DIR "${CTEST_BINARY_DIRECTORY}/deep_binary_dir")
file(MAKE_DIRECTORY "${DEEP_BINARY_DIR}")
file(WRITE "${DEEP_BINARY_DIR}/CMakeCache.txt")

foreach(SUBDIR A Z A/A A/Z Z/A Z/Z)
  set(FULL_SUBDIR "${DEEP_BINARY_DIR}/${SUBDIR}")
  file(MAKE_DIRECTORY "${FULL_SUBDIR}")

  foreach(SUBFILE A.cpp Z.bat)
    set(FULL_SUBFILE "${FULL_SUBDIR}/${SUBFILE}")
    file(WRITE "${FULL_SUBFILE}" "I am '${FULL_SUBFILE}'")
  endforeach()
endforeach()

if(NOT EXISTS "${DEEP_BINARY_DIR}"
  OR NOT EXISTS "${DEEP_BINARY_DIR}/CMakeCache.txt"
  OR NOT EXISTS "${DEEP_BINARY_DIR}/Z/A/Z.bat")
    message(FATAL_ERROR "deep_binary_dir precondition failed")
endif()

ctest_empty_binary_directory("${DEEP_BINARY_DIR}")

if(EXISTS "${DEEP_BINARY_DIR}")
  message(FATAL_ERROR "deep_binary_dir should have been removed")
endif()

message("TEST_SUCCESS")
