<template>
  <nav class="mb-8 flex gap-3 flex-wrap">
    <NuxtLink 
      to="/dashboard" 
      class="px-5 py-2.5 rounded-button font-semibold transition-all duration-500 relative group"
      :class="$route.path === '/dashboard' 
        ? 'bg-gradient-end text-white shadow-lg shadow-gradient-end/30' 
        : 'bg-bg-secondary/60 border border-white/10 text-white/80 hover:bg-bg-secondary hover:text-white hover:border-white/20'"
    >
      <span class="relative z-10 flex items-center gap-2">
        <span>📊</span>
        <span>Dashboard</span>
      </span>
    </NuxtLink>
    <NuxtLink 
      to="/dashboard/history" 
      class="px-5 py-2.5 rounded-button font-semibold transition-all duration-500 relative group"
      :class="$route.path === '/dashboard/history' 
        ? 'bg-gradient-end/20 border-gradient-end/30 text-white' 
        : 'bg-bg-secondary/60 border border-white/10 text-white/80 hover:bg-bg-secondary hover:text-white hover:border-white/20'"
    >
      <span class="relative z-10 flex items-center gap-2">
        <span>📜</span>
        <span>Historique</span>
      </span>
    </NuxtLink>
    <NuxtLink 
      to="/dashboard/help" 
      class="px-5 py-2.5 rounded-button font-semibold transition-all duration-500 relative group"
      :class="$route.path === '/dashboard/help' 
        ? 'bg-gradient-end/20 border-gradient-end/30 text-white' 
        : 'bg-bg-secondary/60 border border-white/10 text-white/80 hover:bg-bg-secondary hover:text-white hover:border-white/20'"
    >
      <span class="relative z-10 flex items-center gap-2">
        <span>❓</span>
        <span>Aide</span>
      </span>
    </NuxtLink>
    <NuxtLink 
      to="/dashboard/legal" 
      class="px-5 py-2.5 rounded-button font-semibold transition-all duration-500 relative group"
      :class="$route.path === '/dashboard/legal' 
        ? 'bg-gradient-end/20 border-gradient-end/30 text-white' 
        : 'bg-bg-secondary/60 border border-white/10 text-white/80 hover:bg-bg-secondary hover:text-white hover:border-white/20'"
    >
      <span class="relative z-10 flex items-center gap-2">
        <span>📄</span>
        <span>CGU & Mentions légales</span>
      </span>
    </NuxtLink>
  </nav>
</template>
