<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-primary py-20 px-5 relative overflow-hidden">
    <!-- Animated Ambient Background -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-end/20 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div class="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-barca-red/10 rounded-full blur-[120px] animate-pulse-slow" style="animation-delay: 2s;"></div>
    </div>

    <!-- Login Container -->
    <div class="w-full max-w-md relative z-10 animate-fade-in-up">
      <!-- Header -->
      <div class="text-center mb-10">
        <h1 class="text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 tracking-tight">L-Klàsico</h1>
        <p class="text-white/60 text-lg">Connectez-vous à votre espace fan</p>
      </div>

      <!-- Glass Card -->
      <div class="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden group">
        <!-- Shine Effect -->
        <div class="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

        <form @submit.prevent="handleLogin" class="space-y-6 relative z-10">
          <div class="space-y-2">
            <label class="text-sm font-bold text-white/80 ml-1">Email</label>
            <div class="relative">
              <span class="absolute left-4 top-1/2 -translate-y-1/2 text-xl">📧</span>
              <input
                v-model="email"
                type="email"
                required
                class="w-full bg-black/20 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:border-gradient-end focus:ring-1 focus:ring-gradient-end transition-all"
                placeholder="votre@email.com"
              />
            </div>
          </div>

          <div class="space-y-2">
            <label class="text-sm font-bold text-white/80 ml-1">Mot de passe</label>
            <div class="relative">
              <span class="absolute left-4 top-1/2 -translate-y-1/2 text-xl">🔒</span>
              <input
                v-model="password"
                type="password"
                required
                class="w-full bg-black/20 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:border-gradient-end focus:ring-1 focus:ring-gradient-end transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <Transition name="slide-fade">
            <div v-if="error" class="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-200 text-sm flex items-center gap-3">
              <span class="text-xl">⚠️</span>
              {{ error }}
            </div>
          </Transition>

          <button
            type="submit"
            :disabled="loading"
            class="w-full btn btn-primary btn-lg rounded-xl font-bold shadow-lg shadow-gradient-end/25 group relative overflow-hidden"
          >
            <div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span v-if="!loading" class="relative z-10 flex items-center justify-center gap-2">
              Se connecter
              <span class="group-hover:translate-x-1 transition-transform">→</span>
            </span>
            <span v-else class="relative z-10 flex items-center justify-center gap-3">
              <span class="animate-spin h-5 w-5 border-2 border-white/30 border-t-white rounded-full"></span>
              Connexion...
            </span>
          </button>
        </form>

        <div class="mt-8 text-center space-y-4">
          <a href="#" class="text-sm text-white/50 hover:text-white transition-colors">Mot de passe oublié ?</a>
          <div class="w-full h-px bg-white/5"></div>
          <p class="text-white/60 text-sm">
            Pas encore de compte ? 
            <a href="#" class="text-gradient-end font-bold hover:underline">S'inscrire</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})

const { login } = useAuth()
const router = useRouter()

const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')

const handleLogin = async () => {
  loading.value = true
  error.value = ''

  try {
    const success = await login(email.value, password.value)
    
    if (success) {
      await router.push('/dashboard')
    } else {
      error.value = 'Email ou mot de passe incorrect'
    }
  } catch (err) {
    error.value = 'Une erreur est survenue. Veuillez réessayer.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.loading-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
