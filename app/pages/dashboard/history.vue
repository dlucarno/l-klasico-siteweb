<template>
  <div class="min-h-screen bg-gradient-primary pb-20">
    <DashboardHeader />
    
    <div class="container py-16 mb-20 relative z-10">
      <DashboardNav />
      
      <div class="card fade-in-up">
        <div class="flex items-center gap-3 mb-8">
          <div class="w-1 h-10 bg-gradient-end rounded-full"></div>
          <h2 class="text-3xl font-bold text-white">Historique des transactions</h2>
        </div>
        
        <div class="space-y-4">
          <div 
            v-for="(transaction, index) in transactions" 
            :key="index"
            class="p-5 bg-gradient-to-r from-bg-primary/60 to-bg-primary/40 rounded-[20px] border border-white/10 hover:border-gradient-end/30 hover:bg-gradient-to-r hover:from-gradient-end/10 hover:to-barca-red/10 transition-all duration-500 group stat-card"
          >
            <div class="flex justify-between items-start mb-3">
              <div class="flex items-center gap-3">
                <div 
                  :class="[
                    'w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-500',
                    transaction.type === 'purchase' ? 'bg-blue-500/20 group-hover:bg-blue-500/30' :
                    transaction.type === 'earn' ? 'bg-green-500/20 group-hover:bg-green-500/30' :
                    'bg-yellow-500/20 group-hover:bg-yellow-500/30'
                  ]"
                >
                  {{ transaction.icon }}
                </div>
                <div>
                  <span class="font-bold text-white block group-hover:text-gradient-end transition-colors duration-300">
                    {{ transaction.title }}
                  </span>
                  <span class="text-sm text-white/60">{{ transaction.description }}</span>
                </div>
              </div>
              <span class="text-sm text-white/50 font-medium">{{ transaction.date }}</span>
            </div>
            <div class="flex justify-between items-center">
              <div 
                :class="[
                  'text-2xl font-black',
                  transaction.type === 'purchase' ? 'text-blue-400' :
                  transaction.type === 'earn' ? 'text-green-400' :
                  'text-yellow-400'
                ]"
              >
                {{ transaction.amount > 0 ? '+' : '' }}{{ transaction.amount }} L-Coins
              </div>
              <div class="text-sm text-white/70">
                {{ transaction.method }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

const transactions = [
  {
    type: 'purchase',
    icon: '🛒',
    title: 'Achat de L-Coins',
    description: 'Pack Premium',
    amount: 500,
    method: 'Carte bancaire - 40€',
    date: '15/01/2025'
  },
  {
    type: 'earn',
    icon: '🏆',
    title: 'Gain de L-Coins',
    description: 'Victoire en duel',
    amount: 250,
    method: 'Récompense',
    date: '12/01/2025'
  },
  {
    type: 'withdraw',
    icon: '💸',
    title: 'Retrait demandé',
    description: 'En attente de traitement',
    amount: -100,
    method: 'Virement bancaire',
    date: '10/01/2025'
  },
  {
    type: 'earn',
    icon: '🎯',
    title: 'Gain de L-Coins',
    description: 'Quiz quotidien',
    amount: 50,
    method: 'Récompense',
    date: '08/01/2025'
  }
]
</script>
