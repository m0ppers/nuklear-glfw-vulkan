#define GLFW_INCLUDE_VULKAN
#include <GLFW/glfw3.h>
#include "vulkan/vulkan.h"

#ifdef __cplusplus
extern "C" {
#endif

void init_overlay(GLFWwindow* _win, VkDevice logical_device, VkPhysicalDevice physical_device, VkQueue graphics_queue, uint32_t graphics_queue_index, VkFramebuffer* framebuffers, uint32_t framebuffers_len, uint32_t framebuffer_width, uint32_t framebuffer_height, VkFormat color_format, VkFormat depth_format);
VkSemaphore submit_overlay(uint32_t buffer_index, VkSemaphore);
void shutdown_overlay();

#ifdef __cplusplus
}
#endif