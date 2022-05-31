#version 450
#extension GL_ARB_separate_shader_objects : enable

layout(input_attachment_index = 0, set = 0, binding = 0) uniform subpassInput overlayInput;

layout(location = 0) out vec4 outColor;

void main() {
    outColor = subpassLoad(overlayInput);
}