<template>
  <div class="min-h-screen bg-gradient-primary pb-20">
    <DashboardHeader />
    
    <div class="container py-16 mb-20 relative z-10">
      <DashboardNav />
      
      <div class="card fade-in-up space-y-8">
        <div>
          <div class="flex items-center gap-3 mb-6">
            <div class="w-1 h-10 bg-gradient-end rounded-full"></div>
            <h2 class="text-3xl font-bold text-white">Conditions Générales d'Utilisation</h2>
          </div>
          <div class="text-white/80 leading-relaxed space-y-4 pl-4">
            <p class="p-4 bg-bg-primary/50 rounded-[16px] border border-white/10">
              Les L-Coins sont une <strong class="text-white">monnaie virtuelle interne</strong> à la plateforme L-Klàsico. 
              Ils ne peuvent être échangés que dans le cadre de l'application et ne constituent pas une monnaie légale.
            </p>
            <p class="p-4 bg-bg-primary/50 rounded-[16px] border border-white/10">
              Seuls les L-Coins <strong class="text-green-400">gagnés par le jeu</strong> peuvent être retirés. 
              Les L-Coins <strong class="text-blue-400">achetés</strong> ne sont pas remboursables et ne peuvent pas être convertis en monnaie réelle.
            </p>
            <p class="p-4 bg-bg-primary/50 rounded-[16px] border border-white/10">
              Tous les retraits sont soumis à une <strong class="text-white">vérification d'identité</strong> (KYC) 
              pour des raisons de sécurité et de conformité réglementaire.
            </p>
          </div>
        </div>

        <div>
          <div class="flex items-center gap-3 mb-6">
            <div class="w-1 h-10 bg-gradient-end rounded-full"></div>
            <h2 class="text-3xl font-bold text-white">Mentions Légales</h2>
          </div>
          <div class="p-6 bg-gradient-to-br from-gradient-end/20 to-barca-red/20 rounded-[20px] border border-gradient-end/30 space-y-3">
            <div class="flex items-start gap-3">
              <span class="text-xl">🏢</span>
              <div>
                <div class="font-bold text-white mb-1">Éditeur</div>
                <div class="text-white/80">L-Klàsico</div>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-xl">📧</span>
              <div>
                <div class="font-bold text-white mb-1">Email</div>
                <a href="mailto:noreply@l-klasico.com" class="text-gradient-end hover:underline">
                  noreply@l-klasico.com
                </a>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-xl">🌐</span>
              <div>
                <div class="font-bold text-white mb-1">Site web</div>
                <a href="https://l-klasico.com" target="_blank" class="text-gradient-end hover:underline">
                  https://l-klasico.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="p-6 bg-gradient-to-r from-yellow-500/15 to-orange-500/15 border border-yellow-500/30 rounded-[20px] backdrop-blur-xl">
          <p class="text-sm text-yellow-300/90 leading-relaxed">
            <strong class="text-white">⚠️ Avertissement :</strong> Les valeurs de conversion sont indicatives et peuvent varier. 
            Les retraits sont soumis à vérification d'identité et peuvent prendre 3 à 5 jours ouvrés. 
            L-Klàsico se réserve le droit de modifier les conditions de retrait à tout moment.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
</script>
