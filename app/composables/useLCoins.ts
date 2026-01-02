// Taux de conversion L-Coin (exemples)
const CONVERSION_RATES = {
  EUR: 0.10, // 1 L-Coin = 0.10 €
  USD: 0.11, // 1 L-Coin = 0.11 $
  XOF: 65.5 // 1 L-Coin = 65.5 FCFA
}

export const useLCoins = () => {
  const { user } = useAuth()

  const totalLCoins = computed(() => {
    if (!user.value) return 0
    return user.value.lCoins.earned + user.value.lCoins.purchased
  })

  const cashoutableLCoins = computed(() => {
    if (!user.value) return 0
    return user.value.lCoins.earned
  })

  const convertToCurrency = (lCoins: number, currency: 'EUR' | 'USD' | 'XOF' = 'EUR') => {
    return lCoins * CONVERSION_RATES[currency]
  }

  const formatCurrency = (amount: number, currency: 'EUR' | 'USD' | 'XOF' = 'EUR') => {
    const symbols = {
      EUR: '€',
      USD: '$',
      XOF: 'FCFA'
    }
    
    if (currency === 'XOF') {
      return `${amount.toLocaleString('fr-FR', { maximumFractionDigits: 0 })} ${symbols[currency]}`
    }
    
    return `${amount.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${symbols[currency]}`
  }

  const formatLCoins = (amount: number) => {
    return `${amount.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} L-Coins`
  }

  return {
    totalLCoins,
    cashoutableLCoins,
    convertToCurrency,
    formatCurrency,
    formatLCoins,
    CONVERSION_RATES
  }
}

