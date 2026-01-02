<template>
  <div class="layout dashboard-layout min-h-screen bg-gradient-primary text-white relative overflow-x-hidden">
    <!-- Background Ambient (Shared across dashboard) -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-end/10 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-barca-red/10 rounded-full blur-[100px] animate-pulse-slow" style="animation-delay: 2s;"></div>
    </div>

    <DashboardHeader />
    
    <main class="relative z-10 flex-1">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
}

.animate-pulse-slow {
  animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
