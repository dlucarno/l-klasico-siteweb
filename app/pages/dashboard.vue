<template>
  <div>
    <!-- Content starts directly since layout handles header/bg -->
    <div class="container py-8 md:py-16 mb-20">
      <!-- Welcome Section -->
      <div class="mb-8 md:mb-12 flex flex-col md:flex-row justify-between items-end gap-6 animate-fade-in-up">
        <div>
          <h1 class="text-3xl md:text-4xl font-black mb-2">
            Bonjour, <span class="text-transparent bg-clip-text bg-gradient-to-r from-gradient-end to-purple-400">{{ user?.email?.split('@')[0] || 'Fan' }}</span> 👋
          </h1>
          <p class="text-white/50 text-sm md:text-base">Prêt à dominer le classement aujourd'hui ?</p>
        </div>
        
        <div class="flex gap-3 w-full md:w-auto">
           <button class="flex-1 md:flex-none btn btn-glass px-4 md:px-6 py-3 rounded-xl flex items-center justify-center gap-2">
             <span>🔔</span>
             <span class="hidden md:inline">Notifications</span>
           </button>
           <button class="flex-1 md:flex-none btn btn-primary px-4 md:px-6 py-3 rounded-xl shadow-lg shadow-gradient-end/20 whitespace-nowrap">
             <span>⚔️ Jouer</span>
           </button>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
        <!-- Main Content Column (8 cols) -->
        <div class="lg:col-span-8 space-y-6 md:space-y-8">
          
          <!-- Wallet Card (Refined) -->
          <div class="glass-strong p-6 md:p-8 relative overflow-hidden group rounded-[24px] md:rounded-[32px] border border-white/10 shadow-2xl">
            <!-- Dynamic Background -->
            <div class="absolute inset-0 bg-gradient-to-br from-bg-secondary/80 to-bg-primary/80 z-0"></div>
            <div class="absolute inset-0 bg-[url('/img/pattern.svg')] opacity-5 z-0"></div>
            <div class="absolute -right-20 -top-20 w-80 h-80 bg-gradient-end/30 rounded-full blur-[80px] group-hover:bg-gradient-end/40 transition-colors duration-700"></div>
            
            <div class="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <div class="text-xs md:text-sm text-white/60 font-medium uppercase tracking-wider">Solde Total</div>
                  <div class="px-2 py-0.5 rounded-full bg-white/10 text-[10px] font-bold border border-white/5">LIVE</div>
                </div>
                <div class="text-4xl md:text-6xl font-black mb-4 tracking-tight flex items-baseline gap-2">
                  {{ totalLCoins.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
                  <span class="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 font-bold">LC</span>
                </div>
                <div class="flex items-center gap-4 text-sm">
                   <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400">
                     <span class="text-xs">▲</span> +12.5%
                   </div>
                   <span class="text-white/30 hidden md:inline">|</span>
                   <div class="text-white/50 text-xs md:text-sm">
                     ≈ {{ formatCurrency(convertToCurrency(totalLCoins)) }}
                   </div>
                </div>
              </div>
              
              <div class="grid grid-cols-2 md:flex md:flex-col gap-3 w-full md:w-auto">
                 <button @click="buyModalOpen = true" class="btn bg-white text-bg-primary font-black px-4 md:px-6 py-3 rounded-xl hover:scale-105 transition-transform shadow-lg shadow-white/10 flex items-center justify-center gap-2">
                   <span>💎</span> Acheter
                 </button>
                 <button @click="withdrawModalOpen = true" class="btn btn-glass px-4 md:px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10">
                   <span>🏦</span> Retirer
                 </button>
              </div>
            </div>

            <!-- Mini Stats Grid -->
            <div class="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/5">
              <div class="relative pl-4 border-l-2 border-green-500/30">
                <div class="text-white/40 text-xs mb-1">Gagnés (Retirables)</div>
                <div class="text-xl font-bold text-green-400">{{ formatLCoins(user?.lCoins.earned || 0) }}</div>
              </div>
              <div class="relative pl-4 border-l-2 border-blue-500/30">
                <div class="text-white/40 text-xs mb-1">Achetés (Jeu)</div>
                <div class="text-xl font-bold text-blue-400">{{ formatLCoins(user?.lCoins.purchased || 0) }}</div>
              </div>
            </div>
          </div>

          <!-- Quick Actions Grid (Updated Visuals) -->
          <div class="grid md:grid-cols-2 gap-6">
            <button @click="buyModalOpen = true" class="glass-card p-6 text-left hover:bg-white/10 transition-colors group relative overflow-hidden">
               <div class="absolute right-0 top-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity text-6xl rotate-12">💎</div>
               <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-xl mb-4 shadow-lg group-hover:scale-110 transition-transform relative z-10">
                💎
              </div>
              <h3 class="text-xl font-bold mb-1 relative z-10">Boutique L-Coins</h3>
              <p class="text-white/50 text-sm relative z-10">Accédez aux packs exclusifs et bonus.</p>
            </button>

            <button @click="withdrawModalOpen = true" class="glass-card p-6 text-left hover:bg-white/10 transition-colors group relative overflow-hidden">
               <div class="absolute right-0 top-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity text-6xl rotate-12">🏦</div>
               <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-xl mb-4 shadow-lg group-hover:scale-110 transition-transform relative z-10">
                🏦
              </div>
              <h3 class="text-xl font-bold mb-1 relative z-10">Retirer mes gains</h3>
              <p class="text-white/50 text-sm relative z-10">Convertissez vos victoires en argent réel.</p>
            </button>
          </div>
          
           <!-- Transaction History Mini (Moved here for better flow) -->
           <div class="glass-card p-6">
             <div class="flex justify-between items-center mb-6">
               <h3 class="font-bold flex items-center gap-2">
                 <span class="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                 Derniers Mouvements
               </h3>
               <NuxtLink to="/dashboard/history" class="text-xs text-gradient-end hover:underline px-3 py-1 rounded-full bg-gradient-end/10">Tout voir</NuxtLink>
             </div>
             
             <div class="space-y-4">
               <div class="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-default">
                 <div class="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-sm text-green-400">⬇</div>
                 <div>
                   <div class="text-sm font-bold">Victoire Duel</div>
                   <div class="text-xs text-white/40">Il y a 2h</div>
                 </div>
                 <div class="ml-auto font-bold text-green-400">+50 LC</div>
               </div>
                <div class="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-default">
                 <div class="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-sm text-red-400">⬆</div>
                 <div>
                   <div class="text-sm font-bold">Inscription Tournoi</div>
                   <div class="text-xs text-white/40">Hier</div>
                 </div>
                 <div class="ml-auto font-bold text-white/60">-100 LC</div>
               </div>
             </div>
          </div>
        </div>

        <!-- Sidebar Column (4 cols) -->
        <div class="lg:col-span-4 space-y-6">
          <!-- Interactive Converter Widget -->
          <DashboardConverter />
          
          <!-- Ad / Promo Card -->
          <div class="glass-card p-6 relative overflow-hidden text-center">
            <div class="absolute inset-0 bg-gradient-barca opacity-20"></div>
            <div class="relative z-10">
               <div class="text-4xl mb-2">⚽</div>
               <h3 class="font-bold mb-2">Prochain Clásico</h3>
               <div class="text-2xl font-black mb-4">J-4</div>
               <button class="btn btn-outline text-xs w-full">Voir les cotes</button>
            </div>
          </div>
        </div>
      </div>
  </div>

    <!-- Modals -->
    <DashboardBuyModal 
      :is-open="buyModalOpen" 
      @close="buyModalOpen = false" 
      @success="handleBuySuccess"
    />
    
    <DashboardWithdrawModal 
      :is-open="withdrawModalOpen" 
      @close="withdrawModalOpen = false" 
      @success="handleWithdrawSuccess"
    />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
  layout: 'dashboard'
})

const { user } = useAuth()
const { totalLCoins, convertToCurrency, formatCurrency, formatLCoins } = useLCoins()
const { addCoins, withdrawCoins } = useAuth() // Using logic from useAuth

const buyModalOpen = ref(false)
const withdrawModalOpen = ref(false)

const handleBuySuccess = (pack: any) => {
  addCoins(pack.lCoins + pack.bonus, 'purchased')
  // Bonus coins are usually 'purchased' type or separate, but for simplicity adding to purchased
}

const handleWithdrawSuccess = (amount: number) => {
  withdrawCoins(amount)
}
</script>

<style scoped>
.glass-card {
  @apply bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl;
}
.glass-strong {
  @apply bg-white/10 backdrop-blur-3xl border border-white/20;
}
.animate-pulse-slow {
  animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
