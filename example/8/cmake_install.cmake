# Install script for directory: /home/user/mold

# Set the install prefix
if(NOT DEFINED CMAKE_INSTALL_PREFIX)
  set(CMAKE_INSTALL_PREFIX "/usr/local")
endif()
string(REGEX REPLACE "/$" "" CMAKE_INSTALL_PREFIX "${CMAKE_INSTALL_PREFIX}")

# Set the install configuration name.
if(NOT DEFINED CMAKE_INSTALL_CONFIG_NAME)
  if(BUILD_TYPE)
    string(REGEX REPLACE "^[^A-Za-z0-9_]+" ""
           CMAKE_INSTALL_CONFIG_NAME "${BUILD_TYPE}")
  else()
    set(CMAKE_INSTALL_CONFIG_NAME "RelWithDebInfo")
  endif()
  message(STATUS "Install configuration: \"${CMAKE_INSTALL_CONFIG_NAME}\"")
endif()

# Set the component getting installed.
if(NOT CMAKE_INSTALL_COMPONENT)
  if(COMPONENT)
    message(STATUS "Install component: \"${COMPONENT}\"")
    set(CMAKE_INSTALL_COMPONENT "${COMPONENT}")
  else()
    set(CMAKE_INSTALL_COMPONENT)
  endif()
endif()

# Install shared libraries without execute permission?
if(NOT DEFINED CMAKE_INSTALL_SO_NO_EXE)
  set(CMAKE_INSTALL_SO_NO_EXE "1")
endif()

# Is this installation the result of a crosscompile?
if(NOT DEFINED CMAKE_CROSSCOMPILING)
  set(CMAKE_CROSSCOMPILING "FALSE")
endif()

# Set default install directory permissions.
if(NOT DEFINED CMAKE_OBJDUMP)
  set(CMAKE_OBJDUMP "/bin/objdump")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  if(EXISTS "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/mold/mold-wrapper.so" AND
     NOT IS_SYMLINK "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/mold/mold-wrapper.so")
    file(RPATH_CHECK
         FILE "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/mold/mold-wrapper.so"
         RPATH "")
  endif()
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib/mold" TYPE SHARED_LIBRARY FILES "/home/user/mold/pkg/mold-wrapper.so")
  if(EXISTS "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/mold/mold-wrapper.so" AND
     NOT IS_SYMLINK "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/mold/mold-wrapper.so")
    if(CMAKE_INSTALL_DO_STRIP)
      execute_process(COMMAND "/bin/strip" "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/mold/mold-wrapper.so")
    endif()
  endif()
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
endif()

if(NOT CMAKE_INSTALL_LOCAL_ONLY)
  # Include the install script for the subdirectory.
  include("/home/user/mold/pkg/test/cmake_install.cmake")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  if(EXISTS "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/bin/mold" AND
     NOT IS_SYMLINK "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/bin/mold")
    file(RPATH_CHECK
         FILE "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/bin/mold"
         RPATH "")
  endif()
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/bin" TYPE EXECUTABLE FILES "/home/user/mold/pkg/mold")
  if(EXISTS "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/bin/mold" AND
     NOT IS_SYMLINK "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/bin/mold")
    file(RPATH_CHANGE
         FILE "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/bin/mold"
         OLD_RPATH "/usr/local/lib:"
         NEW_RPATH "")
    if(CMAKE_INSTALL_DO_STRIP)
      execute_process(COMMAND "/bin/strip" "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/bin/mold")
    endif()
  endif()
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/man/man1" TYPE FILE FILES "/home/user/mold/docs/mold.1")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/doc/mold" TYPE FILE FILES "/home/user/mold/LICENSE")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  
      get_filename_component(PREFIX_ABS ${CMAKE_INSTALL_PREFIX}/ ABSOLUTE)
      get_filename_component(OLD_ABS bin/mold ABSOLUTE BASE_DIR ${PREFIX_ABS})
      get_filename_component(NEW_ABS libexec/mold/ld ABSOLUTE BASE_DIR ${PREFIX_ABS})
      get_filename_component(NEW_DIR ${NEW_ABS} DIRECTORY)
      file(RELATIVE_PATH OLD_REL ${NEW_DIR} ${OLD_ABS})
      message(STATUS "Installing symlink: $ENV{DESTDIR}${NEW_ABS} -> ${OLD_REL}")
      file(MAKE_DIRECTORY $ENV{DESTDIR}${NEW_DIR})
      file(CREATE_LINK ${OLD_REL} $ENV{DESTDIR}${NEW_ABS} SYMBOLIC)
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  
      get_filename_component(PREFIX_ABS ${CMAKE_INSTALL_PREFIX}/ ABSOLUTE)
      get_filename_component(OLD_ABS bin/mold ABSOLUTE BASE_DIR ${PREFIX_ABS})
      get_filename_component(NEW_ABS bin/ld.mold ABSOLUTE BASE_DIR ${PREFIX_ABS})
      get_filename_component(NEW_DIR ${NEW_ABS} DIRECTORY)
      file(RELATIVE_PATH OLD_REL ${NEW_DIR} ${OLD_ABS})
      message(STATUS "Installing symlink: $ENV{DESTDIR}${NEW_ABS} -> ${OLD_REL}")
      file(MAKE_DIRECTORY $ENV{DESTDIR}${NEW_DIR})
      file(CREATE_LINK ${OLD_REL} $ENV{DESTDIR}${NEW_ABS} SYMBOLIC)
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  
      get_filename_component(PREFIX_ABS ${CMAKE_INSTALL_PREFIX}/ ABSOLUTE)
      get_filename_component(OLD_ABS share/man/man1/mold.1 ABSOLUTE BASE_DIR ${PREFIX_ABS})
      get_filename_component(NEW_ABS share/man/man1/ld.mold.1 ABSOLUTE BASE_DIR ${PREFIX_ABS})
      get_filename_component(NEW_DIR ${NEW_ABS} DIRECTORY)
      file(RELATIVE_PATH OLD_REL ${NEW_DIR} ${OLD_ABS})
      message(STATUS "Installing symlink: $ENV{DESTDIR}${NEW_ABS} -> ${OLD_REL}")
      file(MAKE_DIRECTORY $ENV{DESTDIR}${NEW_DIR})
      file(CREATE_LINK ${OLD_REL} $ENV{DESTDIR}${NEW_ABS} SYMBOLIC)
endif()

if(CMAKE_INSTALL_COMPONENT)
  set(CMAKE_INSTALL_MANIFEST "install_manifest_${CMAKE_INSTALL_COMPONENT}.txt")
else()
  set(CMAKE_INSTALL_MANIFEST "install_manifest.txt")
endif()

string(REPLACE ";" "\n" CMAKE_INSTALL_MANIFEST_CONTENT
       "${CMAKE_INSTALL_MANIFEST_FILES}")
file(WRITE "/home/user/mold/pkg/${CMAKE_INSTALL_MANIFEST}"
     "${CMAKE_INSTALL_MANIFEST_CONTENT}")
