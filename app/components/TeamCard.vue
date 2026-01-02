<template>
  <div 
    :class="[
      'card',
      'text-center',
      'py-10',
      'px-8',
      'transition-all',
      'duration-500',
      'border-2',
      'border-transparent',
      'relative',
      'overflow-hidden',
      'group',
      'hover:-translate-y-3',
      'hover:scale-[1.02]',
      team === 'barca' ? 'hover:glow-barca' : 'hover:glow-real'
    ]"
  >
    <!-- Barre de couleur animée en haut -->
    <div 
      class="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-2"
      :class="team === 'barca' ? 'bg-gradient-barca' : 'bg-gradient-real'"
    ></div>
    
    <!-- Effet de brillance au survol -->
    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
    
    <!-- Cercle de fond animé -->
    <div 
      :class="[
        'absolute',
        '-bottom-20',
        '-right-20',
        'w-40',
        'h-40',
        'rounded-full',
        'opacity-20',
        'blur-2xl',
        'group-hover:opacity-40',
        'transition-opacity',
        'duration-500',
        team === 'barca' ? 'bg-barca-blue' : 'bg-real-gold'
      ]"
    ></div>
    
    <div class="relative z-10">
      <div class="mb-8">
        <div 
          :class="[
            'w-24',
            'h-24',
            'mx-auto',
            'mb-6',
            'bg-gradient-end/10',
            'rounded-full',
            'flex',
            'items-center',
            'justify-center',
            'border-3',
            'transition-all',
            'duration-500',
            'group-hover:scale-110',
            'group-hover:rotate-12',
            'group-hover:shadow-lg',
            team === 'barca' ? 'border-barca-blue group-hover:border-barca-red' : 'border-real-gold group-hover:border-real-white'
          ]"
        >
          <span class="text-4xl transform group-hover:scale-125 transition-transform duration-500 ease-out">
            {{ team === 'barca' ? '🔵🔴' : '⚪🟡' }}
          </span>
        </div>
        <h3 
          :class="[
            'text-3xl',
            'md:text-4xl',
            'font-extrabold',
            'mb-2',
            'bg-clip-text',
            'text-transparent',
            'transition-all',
            'duration-300',
            'group-hover:scale-105',
            team === 'barca' ? 'bg-gradient-barca' : 'bg-gradient-real'
          ]"
        >
          {{ name }}
        </h3>
        <p class="text-white/70 text-sm font-semibold group-hover:text-white/90 transition-colors">
          {{ colors }}
        </p>
      </div>
      
      <div>
        <p class="text-white/90 leading-relaxed mb-8 group-hover:text-white transition-colors">
          {{ description }}
        </p>
        <div class="flex justify-around pt-8 border-t border-gradient-end/20 group-hover:border-gradient-end/40 transition-colors duration-500">
          <div class="flex flex-col gap-2 group-hover:scale-110 transition-transform duration-500">
            <span class="text-3xl font-extrabold text-gradient-end group-hover:text-barca-blue transition-colors duration-500">
              1,234
            </span>
            <span class="text-white/70 text-xs font-semibold group-hover:text-white/90 transition-colors duration-300">Points</span>
          </div>
          <div class="flex flex-col gap-2 group-hover:scale-110 transition-transform duration-500">
            <span class="text-3xl font-extrabold text-gradient-end group-hover:text-barca-blue transition-colors duration-500">
              5,678
            </span>
            <span class="text-white/70 text-xs font-semibold group-hover:text-white/90 transition-colors duration-300">Joueurs</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  team: 'barca' | 'real'
  name: string
  colors: string
  description: string
}>()
</script>
