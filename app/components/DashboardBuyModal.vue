<template>
  <Transition name="fade">
    <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" @click="$emit('close')"></div>
      
      <!-- Modal Content -->
      <div class="bg-bg-secondary w-full max-w-2xl rounded-[32px] border border-white/10 shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]">
        <!-- Animated Background -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-end/10 rounded-full blur-[80px] pointer-events-none"></div>

        <!-- Header -->
        <div class="p-6 md:p-8 border-b border-white/5 flex justify-between items-center shrink-0">
          <div>
            <h2 class="text-xl md:text-3xl font-black bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Boutique L-Coins</h2>
            <p class="text-white/50 text-xs md:text-sm mt-1">Rechargez votre compte pour dominer la ligue</p>
          </div>
          <button @click="$emit('close')" class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
            ✕
          </button>
        </div>

        <!-- Scrollable Content -->
        <div class="p-4 md:p-8 overflow-y-auto custom-scrollbar">
          <!-- Packs Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <button 
              v-for="pack in packs" 
              :key="pack.id"
              @click="selectPack(pack)"
              class="relative p-4 md:p-6 rounded-2xl border-2 text-left transition-all duration-300 group overflow-hidden"
              :class="selectedPack?.id === pack.id ? 'bg-gradient-end/10 border-gradient-end shadow-[0_0_30px_rgba(58,123,255,0.2)]' : 'bg-white/5 border-transparent hover:border-white/10 hover:bg-white/10'"
            >
              <div v-if="pack.popular" class="absolute top-2 right-2 md:top-3 md:right-3 px-2 py-0.5 bg-gradient-to-r from-real-gold to-yellow-500 text-bg-primary text-[8px] md:text-[10px] font-bold rounded-full uppercase tracking-wider">
                Populaire
              </div>

              <div class="flex justify-between items-start mb-3 md:mb-4">
                 <div class="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center text-xl md:text-2xl group-hover:scale-110 transition-transform">
                   💰
                 </div>
                 <div class="text-right">
                   <div class="text-xl md:text-2xl font-black">{{ pack.price }}€</div>
                   <div class="text-[8px] md:text-[10px] text-white/40 line-through" v-if="pack.oldPrice">{{ pack.oldPrice }}€</div>
                 </div>
              </div>

              <div class="mb-2">
                <div class="text-2xl md:text-3xl font-black text-white group-hover:text-gradient-end transition-colors">{{ pack.lCoins }} <span class="text-xs md:text-sm font-medium text-white/50">LC</span></div>
              </div>

              <div v-if="pack.bonus > 0" class="flex items-center gap-2 text-xs md:text-sm text-green-400 bg-green-400/10 py-1 px-2 rounded-lg inline-block">
                <span>🎁</span> +{{ pack.bonus }} Bonus offert
              </div>
            </button>
          </div>

          <!-- Payment Method Simulation -->
          <div v-if="selectedPack" ref="paymentSection" class="mt-6 md:mt-8 animate-fade-in-up">
            <h3 class="font-bold text-base md:text-lg mb-4">Moyen de paiement</h3>
            <div class="grid grid-cols-3 gap-2 md:gap-3">
              <button 
                v-for="method in methods" 
                :key="method.id"
                @click="selectedMethod = method.id"
                class="p-2 md:p-3 rounded-xl border flex flex-col items-center gap-1 md:gap-2 transition-all"
                :class="selectedMethod === method.id ? 'bg-white/10 border-white text-white' : 'bg-white/5 border-transparent text-white/50 hover:bg-white/10'"
              >
                <span class="text-xl md:text-2xl">{{ method.icon }}</span>
                <span class="text-[10px] md:text-xs font-bold">{{ method.name }}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Sticky Footer -->
        <div class="p-4 md:p-6 border-t border-white/5 bg-bg-secondary/95 backdrop-blur-xl shrink-0">
          <button 
            @click="handlePurchase"
            :disabled="!selectedPack || processing"
            class="w-full btn btn-primary py-3 md:py-4 rounded-xl font-bold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
          >
            <span v-if="processing" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            <span v-else>
              {{ selectedPack ? `Payer ${selectedPack.price}€` : 'Sélectionnez un pack' }}
            </span>
          </button>
          <p class="text-center text-white/30 text-[10px] md:text-xs mt-3">
             🔒 Paiement 100% sécurisé et instantané via Stripe
          </p>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits(['close', 'success'])

const processing = ref(false)
const selectedMethod = ref('card')
const paymentSection = ref<HTMLElement | null>(null)

const packs = [
  { id: 1, lCoins: 100, price: 10, bonus: 0 },
  { id: 2, lCoins: 250, price: 22, oldPrice: 25, bonus: 25 },
  { id: 3, lCoins: 500, price: 40, oldPrice: 50, bonus: 75, popular: true },
  { id: 4, lCoins: 1000, price: 75, oldPrice: 100, bonus: 200 }
]

const methods = [
  { id: 'card', name: 'Carte', icon: '💳' },
  { id: 'apple', name: 'Apple Pay', icon: '🍎' },
  { id: 'paypal', name: 'PayPal', icon: '🅿️' }
]

const selectedPack = ref<any>(null)

const selectPack = async (pack: any) => {
  selectedPack.value = pack
  await nextTick()
  if (paymentSection.value) {
    paymentSection.value.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const handlePurchase = async () => {
  if (!selectedPack.value) return
  processing.value = true
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))
  processing.value = false
  emit('success', selectedPack.value)
  emit('close')
}
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(255,255,255,0.02);
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.1);
  border-radius: 10px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
