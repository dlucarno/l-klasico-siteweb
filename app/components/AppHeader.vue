<template>
  <header class="fixed top-0 left-0 right-0 bg-bg-primary/95 backdrop-blur-xl z-50 border-b border-primary-blue/20 shadow-lg shadow-primary-blue/10">
    <nav class="container flex justify-between items-center py-4">
      <div class="logo group">
        <h1 class="text-3xl font-black bg-gradient-text bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-500 ease-out">
          L-Klàsico
        </h1>
      </div>
      <ul class="hidden md:flex md:flex-row md:gap-8 md:items-center">
        <li v-for="link in links" :key="link.href">
          <a 
            :href="link.href" 
            @click="closeMenu" 
            class="text-white no-underline font-semibold transition-all duration-500 relative group/link hover:text-gradient-end after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-end after:transition-all after:duration-500 hover:after:w-full"
          >
            {{ link.label }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-end transition-all duration-500 group-hover/link:w-full"></span>
          </a>
        </li>
        <li>
          <NuxtLink 
            v-if="!isAuthenticated"
            to="/login" 
            class="btn relative overflow-hidden bg-gradient-to-r from-real-gold to-yellow-500 text-bg-primary font-black text-sm px-6 py-2 hover:scale-105 transition-transform shadow-[0_0_20px_rgba(253,185,19,0.4)]"
          >
            Se connecter
          </NuxtLink>
          <div v-else class="flex items-center gap-4">
            <NuxtLink 
              to="/dashboard" 
              class="font-bold text-white hover:text-primary-blue transition-colors"
            >
              Dashboard
            </NuxtLink>
            <button 
              @click="logout" 
              class="btn relative overflow-hidden bg-gradient-to-r from-real-gold to-yellow-500 text-bg-primary font-black text-sm px-6 py-2 hover:scale-105 transition-transform shadow-[0_0_20px_rgba(253,185,19,0.4)]"
            >
              Déconnexion
            </button>
          </div>
        </li>
      </ul>
      <button 
        @click="toggleMenu" 
        aria-label="Menu"
        class="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-1.5 group/btn"
      >
        <span 
          :class="[
            'w-6 h-0.5 bg-white rounded transition-all duration-300',
            menuOpen ? 'rotate-45 translate-y-2' : ''
          ]"
        ></span>
        <span 
          :class="[
            'w-6 h-0.5 bg-white rounded transition-all duration-300',
            menuOpen ? 'opacity-0' : 'opacity-100'
          ]"
        ></span>
        <span 
          :class="[
            'w-6 h-0.5 bg-white rounded transition-all duration-300',
            menuOpen ? '-rotate-45 -translate-y-2' : ''
          ]"
        ></span>
      </button>
    </nav>
    
    <!-- Menu mobile avec animation améliorée -->
    <ClientOnly>
      <Teleport to="body">
        <Transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="translate-x-full opacity-0"
          enter-to-class="translate-x-0 opacity-100"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="translate-x-0 opacity-100"
          leave-to-class="translate-x-full opacity-0"
        >
          <div 
            v-show="menuOpen"
            class="md:hidden fixed top-[70px] left-0 right-0 bottom-0 bg-bg-primary/95 backdrop-blur-xl border-t border-white/10 z-[9999] overflow-y-auto"
          >
            <div class="flex flex-col items-center justify-start pt-12 min-h-full p-8 space-y-8">
              <ul class="flex flex-col items-center space-y-8 w-full">
                <li v-for="link in links" :key="link.href" class="w-full text-center">
                  <a 
                    :href="link.href" 
                    @click="closeMenu" 
                    class="text-white text-3xl font-black block py-2 hover:text-primary-blue transition-colors duration-300"
                  >
                    {{ link.label }}
                  </a>
                </li>
              </ul>

              <div class="w-full max-w-xs pt-12 border-t border-white/10">
                <NuxtLink 
                  v-if="!isAuthenticated"
                  to="/login" 
                  @click="closeMenu"
                  class="btn relative overflow-hidden bg-gradient-to-r from-real-gold to-yellow-500 text-bg-primary w-full text-lg font-bold py-4 flex justify-center items-center shadow-lg shadow-real-gold/20 mb-4 hover:scale-[1.02] transition-transform"
                >
                  Se connecter
                </NuxtLink>
                <div v-else class="space-y-4">
                  <NuxtLink 
                    to="/dashboard" 
                    @click="closeMenu"
                    class="btn btn-primary w-full text-lg font-bold py-4 flex justify-center items-center shadow-lg shadow-primary-blue/20"
                  >
                    Accéder au Dashboard
                  </NuxtLink>
                  <button 
                    @click="logout(); closeMenu()"
                    class="btn relative overflow-hidden bg-gradient-to-r from-real-gold to-yellow-500 text-bg-primary w-full text-sm font-black py-4 flex justify-center items-center shadow-lg shadow-real-gold/20"
                  >
                    Déconnexion
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </Teleport>
    </ClientOnly>
  </header>
</template>

<script setup lang="ts">
const { isAuthenticated, logout } = useAuth()
const menuOpen = ref(false)

const links = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#fonctionnalites', label: 'Fonctionnalités' },
  { href: '#equipes', label: 'Équipes' },
  { href: '#telecharger', label: 'Télécharger' }
]

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  // Bloquer le scroll quand le menu est ouvert
  if (process.client) {
    document.body.style.overflow = menuOpen.value ? 'hidden' : ''
  }
}

const closeMenu = () => {
  menuOpen.value = false
  if (process.client) {
    document.body.style.overflow = ''
  }
}
</script>
