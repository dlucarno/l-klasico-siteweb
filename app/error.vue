<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-primary relative overflow-hidden p-6">
    <!-- Animated Background -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-end/20 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-barca-red/20 rounded-full blur-3xl animate-float" style="animation-delay: 2s;"></div>
    </div>

    <div class="card max-w-lg w-full text-center relative z-10 fade-in-up">
      <div class="mb-6 flex justify-center">
        <div class="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center animate-pulse-glow">
          <span class="text-5xl">🤔</span>
        </div>
      </div>
      
      <h1 class="text-8xl font-black gradient-text-animated mb-2">404</h1>
      <h2 class="text-2xl font-bold text-white mb-4">Oups ! Page introuvable</h2>
      
      <p class="text-white/70 mb-8 text-lg">
        Il semblerait que vous ayez manqué le cadre. Cette page n'existe pas ou a été déplacée.
      </p>
      
      <div class="space-y-4">
        <button @click="handleError" class="w-full btn btn-primary btn-large group">
          <span class="flex items-center justify-center gap-2">
            <span>Retour à l'accueil</span>
            <span class="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </span>
        </button>
        
        <button @click="router.back()" class="w-full btn btn-outline group">
          <span class="flex items-center justify-center gap-2">
            <span class="group-hover:-translate-x-1 transition-transform duration-300">←</span>
            <span>Page précédente</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  error: Object
})

const router = useRouter()

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>
