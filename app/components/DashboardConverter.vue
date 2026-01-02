<template>
  <div class="glass-panel p-6 relative overflow-hidden">
    <!-- Presale/Token Style Header -->
    <div class="flex justify-between items-center mb-6">
      <h3 class="font-bold text-lg flex items-center gap-2">
        <span class="w-8 h-8 rounded-full bg-gradient-end flex items-center justify-center text-xs">💱</span>
        Simulateur
      </h3>
      <div class="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/20 animate-pulse">
        ● Live Rate
      </div>
    </div>

    <!-- Input Section (From L-Coins) -->
    <div class="space-y-4 relative">
      <div class="bg-black/20 p-3 md:p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
        <div class="flex justify-between text-[10px] md:text-xs text-white/50 mb-2">
          <span>Vous donnez</span>
          <span class="truncate ml-2">Solde: {{ formatLCoins(cashoutableLCoins) }}</span>
        </div>
        <div class="flex items-center gap-2 md:gap-3">
          <input 
            v-model="amountLCoins"
            type="number" 
            class="bg-transparent text-xl md:text-2xl font-bold w-full focus:outline-none text-white placeholder-white/20 min-w-0"
            placeholder="0"
          />
          <div class="flex items-center gap-1 md:gap-2 bg-white/10 px-2 md:px-3 py-1.5 rounded-lg shrink-0">
            <span class="w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-end flex items-center justify-center text-[8px] md:text-[10px]">LC</span>
            <span class="font-bold text-xs md:text-sm">L-COIN</span>
          </div>
        </div>
      </div>

      <!-- Swap Icon -->
      <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div class="w-7 h-7 md:w-8 md:h-8 bg-bg-secondary border border-white/20 rounded-full flex items-center justify-center text-white/70 shadow-lg text-xs">
          ⬇
        </div>
      </div>

      <!-- Output Section (To Currency) -->
      <div class="bg-black/20 p-3 md:p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
        <div class="flex justify-between text-[10px] md:text-xs text-white/50 mb-2">
          <span>Vous recevez (estimé)</span>
          <span>Devise</span>
        </div>
        <div class="flex items-center gap-2 md:gap-3">
          <div class="text-xl md:text-2xl font-bold w-full text-gradient-end truncate min-w-0">
            {{ formatValue(convertedValue) }}
          </div>
          <div class="relative group">
             <button class="flex items-center gap-1.5 md:gap-2 bg-white/10 px-2 md:px-3 py-1.5 rounded-lg shrink-0 hover:bg-white/20 transition-colors">
              <span class="text-base md:text-lg shrink-0">{{ getCurrencyIcon(selectedCurrency) }}</span>
              <span class="font-bold text-xs md:text-sm">{{ selectedCurrency }}</span>
              <span class="text-[8px] md:text-[10px] ml-1 shrink-0">▼</span>
            </button>
            
            <!-- Currency Dropdown -->
            <div class="absolute right-0 top-full mt-2 w-32 bg-bg-secondary border border-white/10 rounded-xl shadow-xl overflow-hidden hidden group-hover:block z-50">
               <button 
                  v-for="curr in currencies" 
                  :key="curr"
                  @click="selectedCurrency = curr"
                  class="w-full text-left px-4 py-2 text-sm hover:bg-white/10 transition-colors flex items-center gap-2"
                  :class="selectedCurrency === curr ? 'text-gradient-end bg-white/5' : 'text-white/70'"
               >
                 {{ getCurrencyIcon(curr) }} {{ curr }}
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Rate Info -->
    <div class="mt-6 flex flex-wrap justify-between items-center gap-2 text-[10px] md:text-xs text-white/40">
      <span>1 L-Coin ≈ {{ formatRate(selectedCurrency) }}</span>
      <span>Frais réseau: <span class="text-green-400">0%</span></span>
    </div>

    <!-- Quick Buttons -->
    <div class="grid grid-cols-4 gap-1.5 md:gap-2 mt-4">
      <button @click="setPercent(25)" class="py-1 rounded bg-white/5 hover:bg-white/10 text-[10px] md:text-xs transition-colors">25%</button>
      <button @click="setPercent(50)" class="py-1 rounded bg-white/5 hover:bg-white/10 text-[10px] md:text-xs transition-colors">50%</button>
      <button @click="setPercent(75)" class="py-1 rounded bg-white/5 hover:bg-white/10 text-[10px] md:text-xs transition-colors">75%</button>
      <button @click="setPercent(100)" class="py-1 rounded bg-white/5 hover:bg-white/10 text-[10px] md:text-xs transition-colors">MAX</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { cashoutableLCoins, convertToCurrency, CONVERSION_RATES } = useLCoins()

const amountLCoins = ref<number | ''>('')
const selectedCurrency = ref<'EUR' | 'USD' | 'XOF'>('EUR')
const currencies: ('EUR' | 'USD' | 'XOF')[] = ['EUR', 'USD', 'XOF']

const convertedValue = computed(() => {
  if (!amountLCoins.value) return 0
  return convertToCurrency(Number(amountLCoins.value), selectedCurrency.value)
})

const getCurrencyIcon = (curr: string) => {
  const icons = { EUR: '🇪🇺', USD: '🇺🇸', XOF: '🇸🇳' }
  return icons[curr as keyof typeof icons]
}

const formatValue = (val: number) => {
  if (selectedCurrency.value === 'XOF') {
    return val.toLocaleString('fr-FR', { maximumFractionDigits: 0 })
  }
  return val.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

const formatRate = (curr: string) => {
  const rate = CONVERSION_RATES[curr as keyof typeof CONVERSION_RATES]
  return formatValue(rate) + ' ' + curr
}

const formatLCoins = (val: number) => {
  return val.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

const setPercent = (percent: number) => {
  const val = Math.floor(cashoutableLCoins.value * (percent / 100))
  amountLCoins.value = val
}
</script>

<style scoped>
/* Scoped styles mainly for specific overrides if needed */
</style>
