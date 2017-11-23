# nuklear-vulkan

A WIP adapter to make nuklear play with vulkan

![screenshot](http://m0ppers.github.io/nuklear-vulkan.png)

## Requirements

C99 compiler. The code won't compile with a C++ compiler due to designated initializers.
Not yet sure if this should be changed or not. As nuklear
is C only this seemed appropriate (though this thing here
requires C99 instead of C89).

The example code is a slighly modified version of the excellent
https://www.vulkan-tutorial.com and will require a C++ compiler.

The Vulkan SDK and a Vulkan capable graphics card (obviously).

`xxd` should be installed on mac and linux out of the box. For windows it was part of the git distribution.

## Building

- Clone repo
- Place a `glfw-3.2.1` distribution into the dir
- Place the `nuklear` distribution into the dir
- Configure the project with CMake
- build

## TODOs

- [ ] Proper buildchain that outputs a single header only file (building blocks all there)
- [ ] Clarify where external requirements should be placed (glfw, nuklear)
- [ ] Fix wacky input
- [ ] Use correct blending (currently somewhat off)
- [ ] implement resize
- [ ] check performance
- [ ] cross platform tests

## Acknowledgements

- Alexander Overvoorde for his excellent tutorial
- Sascha Willems for his vulkan examples

You will find that I used large portions of the code from their repos.

Also the creators of nuklear and glfw obviously :)

The adapter is based on the glfw_opengl3 variant of nuklear.