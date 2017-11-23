#version 450
#extension GL_ARB_separate_shader_objects : enable

layout(binding = 1) uniform sampler2D fontTexture;

layout(location = 0) in vec4 fragColor;
layout(location = 1) in vec2 fragUv;
layout(location = 0) out vec4 outColor;

void main() {
    vec4 texColor = texture(fontTexture, fragUv);
    // hmmm ... don't get the alpha business here...
    // fragColor * texColor alone does not work
    outColor = vec4(fragColor.rgb * texColor.a, 1.0);
}