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
          <NuxtLink 
            v-else
            to="/dashboard" 
            class="btn btn-outline text-sm px-6 py-2"
          >
            Dashboard
          </NuxtLink>
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
    <div 
      :class="[
        'md:hidden',
        'fixed',
        'top-[70px]',
        'left-0',
        'right-0',
        'bg-bg-primary/98',
        'backdrop-blur-xl',
        'border-t',
        'border-primary-blue/20',
        'transform',
        'transition-all',
        'duration-300',
        'z-40',
        'shadow-xl',
        menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      ]"
    >
      <ul class="flex flex-col p-8 space-y-4">
        <li v-for="link in links" :key="link.href">
          <a 
            :href="link.href" 
            @click="closeMenu" 
            class="text-white no-underline font-semibold block py-3 px-4 rounded-lg hover:bg-gradient-end/20 hover:text-gradient-end transition-all duration-500 hover:translate-x-2"
          >
            {{ link.label }}
          </a>
        </li>
        <li>
          <NuxtLink 
            v-if="!isAuthenticated"
            to="/login" 
            @click="closeMenu"
            class="btn btn-primary text-sm px-6 py-2 block text-center"
          >
            Se connecter
          </NuxtLink>
          <NuxtLink 
            v-else
            to="/dashboard" 
            @click="closeMenu"
            class="btn btn-outline text-sm px-6 py-2 block text-center"
          >
            Dashboard
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
const { isAuthenticated } = useAuth()
const menuOpen = ref(false)

const links = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#fonctionnalites', label: 'Fonctionnalités' },
  { href: '#equipes', label: 'Équipes' },
  { href: '#telecharger', label: 'Télécharger' }
]

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}
</script>
