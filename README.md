# nuklear-glfw-vulkan

A WIP adapter to make nuklear play with vulkan and glfw

![screenshot](http://m0ppers.github.io/nuklear-vulkan.png)

## Requirements

The implementation itself has been done using C99 so far. It is using
designated initializers which are not supported by C++ compilers.
This is subject to change in a later version.

As a result the example overlay only compiles using a C99 compiler.

The background however is a slighly modified version of the
excellent https://www.vulkan-tutorial.com and will require a C++ compiler.

The Vulkan SDK and a Vulkan capable graphics card are obviously also required.

`xxd` should be installed on linux out of the box. For windows it was part of the git distribution.

## Building

- Clone repo
- Configure the project with CMake
- build

## TODOs

- [ ] Proper buildchain that outputs a single header only file (building blocks all there)
- [x] Clarify where external requirements should be placed (glfw, nuklear)
- [x] Fix wacky input
- [x] Use correct blending (currently somewhat off)
- [ ] implement resize
- [ ] check performance
- [ ] cross platform tests

## Acknowledgements

- Alexander Overvoorde for his excellent tutorial
- Sascha Willems for his vulkan examples

You will find that I used large portions of the code from their repos.

Also the creators of nuklear and glfw obviously :)

The adapter is based on the glfw_opengl3 variant of nuklear.
