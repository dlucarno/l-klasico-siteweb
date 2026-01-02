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
  const user = useState<User | null>('user', () => {
    if (process.client) {
      const stored = localStorage.getItem('lklasico_user')
      if (stored) {
        try {
          return JSON.parse(stored)
        } catch (e) {
          return null
        }
      }
    }
    return null
  })
  const isAuthenticated = computed(() => user.value !== null)

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
      
      if (process.client) {
        localStorage.setItem('lklasico_user', JSON.stringify(user.value))
      }
      
      return true
    }
    return false
  }

  const logout = () => {
    user.value = null
    if (process.client) {
      localStorage.removeItem('lklasico_user')
    }
    navigateTo('/')
  }

  const initAuth = () => {
    if (process.client) {
      const stored = localStorage.getItem('lklasico_user')
      if (stored) {
        try {
          user.value = JSON.parse(stored)
        } catch (e) {
          console.error('Error parsing stored user', e)
        }
      }
    }
  }

  return {
    user: readonly(user),
    isAuthenticated,
    login,
    logout,
    initAuth
  }
}

