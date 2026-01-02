export interface User {
  id: string
  email: string
  name: string
  lCoins: {
    earned: number // L-Coins gagnés (cash-outables)
    purchased: number // L-Coins achetés (non cash-outables)
  }
  currency: 'EUR' | 'USD' | 'XOF' // Devise locale
}

export const useAuth = () => {
  // Changement pour useCookie qui gère automatiquement la persistance (SSR + Client)
  // et évite les problèmes d'hydratation liés à localStorage
  const user = useCookie<User | null>('lklasico_user', {
    default: () => null,
    watch: true, // Surveille les changements pour mettre à jour le cookie
    maxAge: 60 * 60 * 24 * 365 // 1 an
  })

  const isAuthenticated = computed(() => !!user.value)

  const login = async (email: string, password: string): Promise<boolean> => {
    // TODO: Remplacer par un vrai appel API
    // Pour l'instant, simulation avec données mock
    if (email && password) {
      user.value = {
        id: '1',
        email,
        name: email.split('@')[0],
        lCoins: {
          earned: 1250.50, // L-Coins gagnés
          purchased: 500.00 // L-Coins achetés
        },
        currency: 'EUR'
      }
      return true
    }
    return false
  }

  const logout = () => {
    user.value = null
    navigateTo('/')
  }

  // initAuth n'est plus nécessaire avec useCookie qui s'initialise tout seul
  const initAuth = () => {
    // Gardé pour compatibilité si nécessaire, mais vide
  }

  const addCoins = (amount: number, type: 'earned' | 'purchased') => {
    if (user.value) {
      user.value.lCoins[type] += amount
      // Force l'update du cookie pour les mutations profondes
      user.value = { ...user.value }
    }
  }

  const withdrawCoins = (amount: number): boolean => {
    if (user.value && user.value.lCoins.earned >= amount) {
      user.value.lCoins.earned -= amount
      // Force l'update du cookie
      user.value = { ...user.value }
      return true
    }
    return false
  }

  return {
    user: readonly(user),
    isAuthenticated,
    login,
    logout,
    initAuth,
    addCoins,
    withdrawCoins
  }
}
