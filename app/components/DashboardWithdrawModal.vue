<template>
  <Transition name="fade">
    <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" @click="$emit('close')"></div>
      
      <!-- Modal Content -->
      <div class="bg-bg-secondary w-full max-w-lg rounded-[32px] border border-white/10 shadow-2xl relative overflow-hidden flex flex-col">
        <!-- Header -->
        <div class="p-8 border-b border-white/5 flex justify-between items-center bg-gradient-to-r from-bg-secondary to-bg-primary">
          <div>
            <h2 class="text-2xl font-black text-white">Retrait des Gains</h2>
            <p class="text-white/50 text-sm mt-0.5">Transférez vos gains vers votre compte</p>
          </div>
          <button @click="$emit('close')" class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
            ✕
          </button>
        </div>

        <div class="p-8 space-y-6">
           <!-- Balance Info -->
           <div class="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 flex justify-between items-center">
             <div>
               <div class="text-xs text-blue-200">Solde Retirable</div>
               <div class="text-xl font-bold text-blue-400">{{ formatLCoins(cashoutableLCoins) }} LC</div>
             </div>
             <div class="text-right">
               <div class="text-xs text-blue-200">Valeur estimée</div>
               <div class="text-xl font-bold text-white">≈ {{ formatCurrency(convertToCurrency(cashoutableLCoins)) }}</div>
             </div>
           </div>

           <!-- Warning if low balance -->
           <div v-if="cashoutableLCoins < 100" class="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 flex gap-3">
             <span class="text-yellow-400">⚠️</span>
             <p class="text-xs text-yellow-100/80 leading-relaxed">
               Le seuil minimum de retrait est de <strong>100 L-Coins</strong>. Continuez à jouer pour débloquer les retraits !
             </p>
           </div>

           <div v-else class="space-y-6">
              <!-- Amount Input -->
              <div>
                <label class="text-sm font-bold text-white/80 ml-1 mb-2 block">Montant à retirer</label>
                <div class="relative">
                  <input
                    v-model="withdrawAmount"
                    type="number"
                    :max="cashoutableLCoins"
                    class="w-full bg-black/20 border border-white/10 rounded-xl py-4 pl-4 pr-16 text-white text-lg placeholder-white/30 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                    placeholder="0"
                  />
                  <button 
                    @click="withdrawAmount = cashoutableLCoins"
                    class="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 bg-white/10 rounded-lg text-xs font-bold hover:bg-white/20"
                  >
                    MAX
                  </button>
                </div>
              </div>

              <!-- Method Selection -->
               <div>
                <label class="text-sm font-bold text-white/80 ml-1 mb-2 block">Méthode de réception</label>
                <select v-model="method" class="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:outline-none">
                  <option value="bank">🏦 Virement Bancaire</option>
                  <option value="mm">📱 Mobile Money (Orange/MTN)</option>
                  <option value="crypto">🪙 Crypto (USDT)</option>
                </select>
              </div>

              <div class="pt-4">
                <button 
                  @click="handleWithdraw"
                  :disabled="processing || !withdrawAmount || withdrawAmount < 100"
                  class="w-full btn bg-green-500 hover:bg-green-600 text-bg-primary font-black py-4 rounded-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-green-500/20"
                >
                  <span v-if="processing" class="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
                  <span v-else>Confirmer le retrait</span>
                </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean
}>()
const emit = defineEmits(['close', 'success'])

const { cashoutableLCoins, formatLCoins, forceRefresh, convertToCurrency, formatCurrency } = useLCoins()
const withdrawAmount = ref<number | ''>('')
const method = ref('bank')
const processing = ref(false)

const handleWithdraw = async () => {
  if (!withdrawAmount.value || withdrawAmount.value > cashoutableLCoins.value) return
  
  processing.value = true
  // Simulate API
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Here we would deduct from user balance
  // For verify purpose we can show an alert or just emit success
  processing.value = false
  emit('success', withdrawAmount.value)
  emit('close')
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
