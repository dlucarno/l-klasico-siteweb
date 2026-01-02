<template>
  <div class="min-h-screen bg-gradient-primary pb-20">
    <DashboardHeader />
    
    <div class="container py-8">
      <DashboardNav />
      
      <div class="card fade-in-up">
        <div class="flex items-center gap-3 mb-8">
          <div class="w-1 h-10 bg-gradient-end rounded-full"></div>
          <h2 class="text-3xl font-bold text-white">Aide & Support</h2>
        </div>
        
        <div class="space-y-6">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="p-6 bg-gradient-to-r from-bg-primary/60 to-bg-primary/40 rounded-[20px] border border-white/10 hover:border-gradient-end/30 hover:bg-gradient-to-r hover:from-gradient-end/10 hover:to-barca-red/10 transition-all duration-500 group stat-card"
          >
            <h3 class="text-xl font-bold mb-3 text-white flex items-center gap-3 group-hover:text-gradient-end transition-colors duration-300">
              <span class="text-2xl">{{ faq.icon }}</span>
              <span>{{ faq.question }}</span>
            </h3>
            <p class="text-white/80 leading-relaxed pl-11">
              {{ faq.answer }}
            </p>
          </div>

          <div class="p-6 bg-gradient-to-br from-gradient-end/20 to-barca-red/20 rounded-[20px] border border-gradient-end/30 mt-8">
            <h3 class="text-xl font-bold mb-4 text-white flex items-center gap-2">
              <span>📧</span>
              <span>Contactez-nous</span>
            </h3>
            <p class="text-white/80 mb-4">
              Besoin d'aide supplémentaire ? Notre équipe est là pour vous aider.
            </p>
            <a 
              href="mailto:support@l-klasico.com" 
              class="btn btn-primary inline-flex items-center gap-2 group"
            >
              <span>support@l-klasico.com</span>
              <span class="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
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

const faqs = [
  {
    icon: '💰',
    question: 'Comment fonctionnent les L-Coins ?',
    answer: 'Les L-Coins sont la monnaie virtuelle de L-Klàsico. Vous pouvez les gagner en jouant (duels, quiz, battle royale) ou les acheter directement. Seuls les L-Coins gagnés peuvent être retirés en monnaie réelle.'
  },
  {
    icon: '💸',
    question: 'Comment retirer mes L-Coins ?',
    answer: 'Vous pouvez retirer vos L-Coins gagnés à partir de 100 L-Coins. Le retrait se fait par virement bancaire, Mobile Money ou sous forme de bons d\'achat. Le délai de traitement est de 3 à 5 jours ouvrés après vérification de votre identité.'
  },
  {
    icon: '🛒',
    question: 'Pourquoi les L-Coins achetés ne sont pas retirables ?',
    answer: 'Les L-Coins achetés sont destinés uniquement à être utilisés dans l\'application pour participer aux jeux, acheter des packs, etc. Seuls les gains obtenus par le jeu peuvent être convertis en monnaie réelle.'
  },
  {
    icon: '💱',
    question: 'Les taux de conversion sont-ils fixes ?',
    answer: 'Les taux de conversion sont indicatifs et peuvent varier selon les conditions du marché. Les valeurs affichées sont des estimations pour vous donner une idée de la valeur de vos L-Coins.'
  }
]
</script>
