<template>
  <!-- 包装器填充整个幻灯片画布 / Wrapper fills the entire slide canvas -->
  <div class="glow-wrapper w-full h-full relative">
    <!-- 渐变层填充包装器 / Gradient layer fills wrapper -->
    <div class="glow-bg" aria-hidden="true"></div>

    <!-- 居中内容 / Centered content -->
    <div class="relative z-10 flex items-center justify-center h-full">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
// 无需额外逻辑 / No additional logic needed
</script>

<style scoped>
/* 发光包装器样式 / Glow wrapper styles */
.glow-wrapper {
  position: relative;
  width: 100%;
  height: 100%; /* 遵循幻灯片画布高度 / respect slide canvas height */
  overflow: visible; /* 允许背景效果溢出 / allow background effects to overflow */
}

/* 发光背景样式 / Glow background styles */
.glow-bg {
  position: absolute;
  inset: 0; /* 填充整个父容器 / fill entire parent container */
  pointer-events: none; /* 不响应鼠标事件 / don't respond to mouse events */
  overflow: visible; /* 允许发光效果完全显示 / allow glow effects to be fully visible */
}

/* 发光背景的伪元素，创建实际的发光效果 / Pseudo-element for glow background, creates the actual glow effect */
.glow-bg::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200vmax; /* 使用视口最大尺寸确保覆盖整个屏幕 / use viewport max to ensure full screen coverage */
  height: 200vmax;
  transform: translate(-50%, -50%); /* 居中定位 / center positioning */
  /* 圆锥渐变：从粉红到橙色到青色再回到粉红 / Conic gradient: from pink to orange to cyan back to pink */
  background: conic-gradient(from 0deg, #ff0080, #ff8c00, #40e0d0, #ff0080);
  filter: blur(140px) saturate(1.4); /* 模糊和饱和度效果 / blur and saturation effects */
  opacity: 0.7; /* 透明度 / opacity */
  animation: subtleGlow 35s ease-in-out infinite alternate; /* 微妙发光动画 / subtle glow animation */
}

/* 微妙发光动画关键帧 / Subtle glow animation keyframes */
@keyframes subtleGlow {
  0% {
    transform: translate(-50%, -50%) scale(1); /* 初始状态：居中，正常大小 / initial state: centered, normal size */
    opacity: 0.6;
  }
  50% {
    transform: translate(-55%, -45%) scale(1.15); /* 中间状态：轻微偏移，放大 / middle state: slight offset, scaled up */
    opacity: 0.8;
  }
  100% {
    transform: translate(-50%, -50%) scale(1); /* 结束状态：回到初始状态 / end state: back to initial */
    opacity: 0.6;
  }
}
</style>