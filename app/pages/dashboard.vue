<template>
  <div class="min-h-screen bg-gradient-primary text-white relative overflow-x-hidden">
    <!-- Background Ambient -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-end/10 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-barca-red/10 rounded-full blur-[100px] animate-pulse-slow" style="animation-delay: 2s;"></div>
    </div>

    <DashboardHeader />

    <main class="container py-12 relative z-10">
      <!-- Welcome Section -->
      <div class="mb-12 flex flex-col md:flex-row justify-between items-end gap-6 animate-fade-in-up">
        <div>
          <h1 class="text-4xl font-black mb-2">
            Bonjour, <span class="text-transparent bg-clip-text bg-gradient-to-r from-gradient-end to-purple-400">{{ user?.email?.split('@')[0] || 'Fan' }}</span> 👋
          </h1>
          <p class="text-white/50">Prêt à dominer le classement aujourd'hui ?</p>
        </div>
        
        <div class="flex gap-3">
           <button class="btn btn-glass px-6 py-3 rounded-xl flex items-center gap-2">
             <span>🔔</span>
             <span class="hidden md:inline">Notifications</span>
           </button>
           <button class="btn btn-primary px-6 py-3 rounded-xl shadow-lg shadow-gradient-end/20">
             <span>⚔️ Jouer un Duel</span>
           </button>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- Main Content Column (8 cols) -->
        <div class="lg:col-span-8 space-y-8">
          
          <!-- Wallet Card (Modern Glass) -->
          <div class="glass-card p-8 relative overflow-hidden group">
            <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
            <div class="absolute -right-20 -top-20 w-64 h-64 bg-gradient-end/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
            
            <div class="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <div class="text-sm text-white/50 font-medium uppercase tracking-wider mb-1">Solde Total</div>
                <div class="text-5xl font-black mb-2 flex items-baseline gap-2">
                  {{ formatLCoins(totalLCoins) }}
                  <span class="text-xl text-gradient-end font-bold">L-Coins</span>
                </div>
                <div class="flex items-center gap-4 text-sm">
                  <span class="px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/20 flex items-center gap-1">
                    <span>↑</span> +12% cette semaine
                  </span>
                </div>
              </div>
              
              <div class="flex gap-3">
                 <button class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" title="Historique">
                   📜
                 </button>
                 <button class="w-12 h-12 rounded-full bg-gradient-end flex items-center justify-center shadow-lg shadow-gradient-end/30 hover:scale-105 transition-transform" title="Recharger" @click="scrollToPurchase">
                   ➕
                 </button>
              </div>
            </div>

            <!-- Mini Stats Grid -->
            <div class="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/5">
              <div>
                <div class="text-white/50 text-xs mb-1">Gagnés (Retirables)</div>
                <div class="text-xl font-bold text-green-400">{{ formatLCoins(user?.lCoins.earned || 0) }}</div>
              </div>
              <div>
                <div class="text-white/50 text-xs mb-1">Achetés (Jeu)</div>
                <div class="text-xl font-bold text-blue-400">{{ formatLCoins(user?.lCoins.purchased || 0) }}</div>
              </div>
            </div>
          </div>

          <!-- Quick Actions Grid -->
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Purchase Card -->
            <div class="glass-card p-6 hover:bg-white/10 transition-colors cursor-pointer group" @click="scrollToPurchase">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-xl mb-4 shadow-lg group-hover:scale-110 transition-transform">
                💎
              </div>
              <h3 class="text-xl font-bold mb-2">Boutique</h3>
              <p class="text-white/50 text-sm">Achetez des packs de L-Coins pour participer aux tournois majeurs.</p>
            </div>

            <!-- Withdraw Card -->
            <div class="glass-card p-6 hover:bg-white/10 transition-colors cursor-pointer group">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-xl mb-4 shadow-lg group-hover:scale-110 transition-transform">
                🏦
              </div>
              <h3 class="text-xl font-bold mb-2">Retrait</h3>
              <p class="text-white/50 text-sm">Convertissez vos gains en argent réel. Seuil min: 100 LC.</p>
            </div>
          </div>
          
           <!-- Packs Integration (Simplified from original) -->
           <div id="buy-coins" class="space-y-6">
              <h3 class="text-2xl font-bold">Packs Populaires</h3>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                 <button 
                  v-for="pack in packs" 
                  :key="pack.id"
                  class="glass-card p-4 text-center hover:border-gradient-end/50 transition-all relative overflow-hidden group"
                  @click="selectPack(pack)"
                 >
                   <div class="absolute inset-0 bg-gradient-end/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <div class="text-2xl mb-2">💰</div>
                   <div class="font-bold text-lg mb-1">{{ pack.lCoins }} LC</div>
                   <div class="text-gradient-end font-black">{{ formatCurrency(pack.price, user?.currency || 'EUR') }}</div>
                   <div v-if="pack.bonus > 0" class="mt-2 text-xs text-green-400 bg-green-400/10 py-1 px-2 rounded-full inline-block">
                     +{{ pack.bonus }} Bonus
                   </div>
                 </button>
              </div>
           </div>

        </div>

        <!-- Sidebar Column (4 cols) -->
        <div class="lg:col-span-4 space-y-6">
          <!-- Converter Widget -->
          <div class="glass-card p-6">
             <h3 class="font-bold mb-6 flex items-center gap-2">
               <span class="w-2 h-6 bg-gradient-end rounded-full"></span>
               Convertisseur
             </h3>
             
             <div class="space-y-3">
               <div class="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                 <span class="text-white/70">🇪🇺 EURO</span>
                 <span class="font-mono font-bold">{{ formatCurrency(convertToCurrency(cashoutableLCoins, 'EUR'), 'EUR') }}</span>
               </div>
               <div class="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                 <span class="text-white/70">🇺🇸 USD</span>
                 <span class="font-mono font-bold">{{ formatCurrency(convertToCurrency(cashoutableLCoins, 'USD'), 'USD') }}</span>
               </div>
               <div class="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                 <span class="text-white/70">🇸🇳 CFA</span>
                 <span class="font-mono font-bold">{{ formatCurrency(convertToCurrency(cashoutableLCoins, 'XOF'), 'XOF') }}</span>
               </div>
             </div>
             
             <div class="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
               <div class="flex gap-3">
                 <div class="text-xl">⚠️</div>
                 <p class="text-xs text-yellow-200/80 leading-relaxed">
                   Les taux de change sont indicatifs et mis à jour quotidiennement.
                 </p>
               </div>
             </div>
          </div>

          <!-- Transaction History Mini -->
          <div class="glass-card p-6">
             <div class="flex justify-between items-center mb-6">
               <h3 class="font-bold">Derniers Mouvements</h3>
               <button class="text-xs text-gradient-end hover:underline">Tout voir</button>
             </div>
             
             <div class="space-y-4">
               <div class="flex items-center gap-3">
                 <div class="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-xs text-green-400">⬇</div>
                 <div>
                   <div class="text-sm font-bold">Victoire Duel</div>
                   <div class="text-xs text-white/40">Il y a 2h</div>
                 </div>
                 <div class="ml-auto font-bold text-green-400">+50 LC</div>
               </div>
                <div class="flex items-center gap-3">
                 <div class="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-xs text-red-400">⬆</div>
                 <div>
                   <div class="text-sm font-bold">Inscription Tournoi</div>
                   <div class="text-xs text-white/40">Hier</div>
                 </div>
                 <div class="ml-auto font-bold text-white/60">-100 LC</div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

const { user, logout } = useAuth()
const { totalLCoins, cashoutableLCoins, convertToCurrency, formatCurrency, formatLCoins } = useLCoins()

interface Pack {
  id: number
  lCoins: number
  price: number
  bonus: number
}

const selectedPack = ref<Pack | null>(null)
const packs: Pack[] = [
  { id: 1, lCoins: 100, price: 10, bonus: 0 },
  { id: 2, lCoins: 250, price: 22, bonus: 25 },
  { id: 3, lCoins: 500, price: 40, bonus: 75 },
  { id: 4, lCoins: 1000, price: 75, bonus: 200 }
]

const selectPack = (pack: Pack) => {
  // Logic to handle selection
  console.log('Selected pack:', pack)
}

const scrollToPurchase = () => {
  const el = document.getElementById('buy-coins')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.glass-card {
  @apply bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl;
}

.animate-pulse-slow {
  animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
