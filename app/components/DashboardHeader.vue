<template>
  <header class="bg-bg-primary/98 backdrop-blur-2xl border-b border-gradient-end/20 sticky top-0 z-50 shadow-xl shadow-gradient-end/10">
    <div class="container py-5">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-6">
          <NuxtLink to="/" class="text-2xl font-black gradient-text-animated hover:scale-105 transition-transform duration-500">
            L-Klàsico
          </NuxtLink>
          <div class="h-8 w-px bg-white/20"></div>
          <div class="flex items-center gap-6">
            <div class="group">
              <div class="text-xs text-white/60 mb-1 font-medium">Solde L-Coins</div>
              <div class="text-xl font-bold text-gradient-end group-hover:scale-105 transition-transform duration-300">
                {{ formatLCoins(totalLCoins) }}
              </div>
            </div>
            <div class="h-8 w-px bg-white/20"></div>
            <div class="group">
              <div class="text-xs text-white/60 mb-1 font-medium">Devise</div>
              <div class="text-lg font-semibold text-white group-hover:scale-105 transition-transform duration-300">
                {{ user?.currency || 'EUR' }}
              </div>
            </div>
          </div>
        </div>
        <button 
          @click="logout" 
          class="btn btn-outline text-sm group"
        >
          <span class="flex items-center gap-2">
            <span>Déconnexion</span>
            <span class="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const { user, logout } = useAuth()
const { totalLCoins, formatLCoins } = useLCoins()
</script>
