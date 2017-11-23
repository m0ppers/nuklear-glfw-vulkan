project(nuklear-vulkan C CXX)
cmake_minimum_required(VERSION 3.1)
set(CMAKE_C_STANDARD 99)
set(CMAKE_CXX_STANDARD 11)

set(GLFW_BUILD_EXAMPLES OFF CACHE STRING "" FORCE)
set(GLFW_BUILD_TESTS    OFF CACHE STRING "" FORCE)
set(GLFW_INSTALL OFF CACHE STRING "" FORCE)

add_subdirectory(glfw-3.2.1)

find_program(GLSL_VALIDATOR
    glslangValidator
    PATHS ${ENV.VULKAN_SDK}/Bin
)
if (NOT GLSL_VALIDATOR)
    message(FATAL_ERROR "glsllangValidator executable not found! make sure that the environment defines VULKAN_SDK correctly")
endif()

find_program(XXD
    xxd
)
if (NOT XXD)
    message(FATAL_ERROR "xxd executable not found! On windows this is part of the GIT distribution")
endif()

set(SHADERS
    demoshaders/demo.frag
    demoshaders/demo.vert
    nuklearshaders/nuklear.frag
    nuklearshaders/nuklear.vert
)
list(APPEND SHADER_HEADERS "")
foreach (SHADER ${SHADERS})
    SET(SPV_FILENAME ${SHADER}.spv)
    
    add_custom_command(
        OUTPUT  ${CMAKE_CURRENT_BINARY_DIR}/${SPV_FILENAME}
        COMMAND ${GLSL_VALIDATOR} -V ${CMAKE_CURRENT_SOURCE_DIR}/${SHADER} -o ${CMAKE_CURRENT_BINARY_DIR}/${SPV_FILENAME}
        DEPENDS ${CMAKE_CURRENT_SOURCE_DIR}/${SHADER}
    )
    add_custom_command(
        OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/${SHADER}.h
        COMMAND ${XXD} -i ${SHADER}.spv ${CMAKE_CURRENT_BINARY_DIR}/${SHADER}.h
        DEPENDS ${CMAKE_CURRENT_BINARY_DIR}/${SPV_FILENAME}
    )
    list(APPEND SHADER_HEADERS ${CMAKE_CURRENT_BINARY_DIR}/${SHADER}.h)
endforeach()

add_executable(demo
    demo.cpp
    overlay.c
    ${SHADER_HEADERS}
)

target_link_libraries(demo
    glfw
    ${VULKAN_LIBRARY}
)

target_include_directories(demo PRIVATE
    nuklear
    glfw-3.2.1/include
    ${VULKAN_INCLUDE_DIR}
    ${CMAKE_CURRENT_BINARY_DIR}
)