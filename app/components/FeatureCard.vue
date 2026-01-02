<template>
  <div 
    class="card text-center py-10 px-8 group relative overflow-hidden"
    :style="{ animationDelay: `${delay}ms` }"
  >
    <!-- Effet de brillance au survol -->
    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer"></div>
    
    <div class="relative z-10">
      <div class="text-6xl mb-6 block transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ease-out">
        {{ icon }}
      </div>
      <h3 class="text-xl font-bold mb-4 text-white group-hover:text-gradient-end transition-colors duration-300">
        {{ title }}
      </h3>
      <p class="text-white/80 leading-relaxed text-sm group-hover:text-white/90 transition-colors duration-300">
        {{ description }}
      </p>
    </div>
    
    <!-- Effet de bordure animée -->
    <div class="absolute inset-0 rounded-card border-2 border-transparent group-hover:border-gradient-end/50 transition-all duration-500"></div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  icon: string
  title: string
  description: string
  delay?: number
}>(), {
  delay: 0
})
</script>
