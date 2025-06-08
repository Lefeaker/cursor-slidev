<script setup lang="ts">
// 导入 Vue 的响应式引用函数 / Import Vue's reactive reference function
import { ref } from 'vue'

// 定义组件属性 / Define component props
const props = defineProps({
  count: {
    default: 0, // 默认计数值 / default count value
  },
})

// 创建响应式计数器，初始值为传入的 count 属性 / Create reactive counter with initial value from count prop
const counter = ref(props.count)
</script>

<template>
  <!-- 计数器容器：使用 flex 布局，最小宽度，带边框和圆角 / Counter container: flex layout, minimum width, with border and rounded corners -->
  <div flex="~" w="min" border="~ main rounded-md">
    <!-- 减少按钮：右边框，内边距，等宽字体，无轮廓，悬停时背景变灰 / Decrease button: right border, padding, monospace font, no outline, gray background on hover -->
    <button
      border="r main"
      p="2"
      font="mono"
      outline="!none"
      hover:bg="gray-400 opacity-20"
      @click="counter -= 1"
    >
      -
    </button>
    <!-- 计数显示：自动边距居中，内边距 / Count display: auto margin for centering, padding -->
    <span m="auto" p="2">{{ counter }}</span>
    <!-- 增加按钮：左边框，内边距，等宽字体，无轮廓，悬停时背景变灰 / Increase button: left border, padding, monospace font, no outline, gray background on hover -->
    <button
      border="l main"
      p="2"
      font="mono"
      outline="!none"
      hover:bg="gray-400 opacity-20"
      @click="counter += 1"
    >
      +
    </button>
  </div>
</template>
