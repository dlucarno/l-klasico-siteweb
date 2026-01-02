<template>
  <div class="relative min-h-screen overflow-x-hidden bg-gradient-primary text-white">
    <!-- Animated Background -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div class="particle-system">
        <div v-for="n in 15" :key="n" class="particle" :style="getParticleStyle(n)"></div>
      </div>
    </div>

    <!-- Hero Section -->
    <section id="accueil" class="min-h-screen flex items-center justify-center relative overflown-hidden py-20">
      <div class="absolute inset-0 bg-gradient-radial opacity-30 pointer-events-none"></div>
      
      <!-- Ambient Light Orbs -->
      <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-end/10 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-barca-red/10 rounded-full blur-[100px] animate-pulse-slow" style="animation-delay: 2s;"></div>

      <div class="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div class="text-center space-y-8 animate-fade-in-up">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default">
            <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span class="text-sm font-medium text-white/90">La Bataille du El Clásico</span>
          </div>

          <h1 class="text-5xl lg:text-7xl font-black tracking-tight leading-tight">
            Vivez le <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-barca-red to-barca-blue animate-gradient">El Clásico</span>
            <span class="block text-4xl lg:text-5xl mt-2 text-white/50 font-bold">Autrement.</span>
          </h1>

          <p class="text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
            Une expérience immersive qui fusionne quiz en temps réel, stratégie et collection. 
            Rejoignez des milliers de fans et prouvez votre valeur.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="#telecharger" class="btn btn-primary btn-lg group relative overflow-hidden">
              <span class="relative z-10 font-bold">Télécharger l'app</span>
              <div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a href="#fonctionnalites" class="btn btn-glass btn-lg group">
              <span>Découvrir</span>
              <span class="group-hover:translate-y-1 transition-transform inline-block ml-2">↓</span>
            </a>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-8 pt-12 border-t border-white/5">
            <div class="stat-item">
              <div class="text-3xl font-bold text-white mb-1">10K+</div>
              <div class="text-xs text-white/40 uppercase tracking-widest">Joueurs</div>
            </div>
            <div class="stat-item">
              <div class="text-3xl font-bold text-white mb-1">50K+</div>
              <div class="text-xs text-white/40 uppercase tracking-widest">Duels</div>
            </div>
            <div class="stat-item">
              <div class="text-3xl font-bold text-white mb-1">4.8</div>
              <div class="text-xs text-white/40 uppercase tracking-widest">Note</div>
            </div>
          </div>
        </div>

        <!-- Visual Content -->
        <div class="relative hidden lg:block animate-fade-in-left">
          <div class="relative z-10 transform hover:scale-105 transition-transform duration-700 ease-out-expo">
            <div class="w-[320px] mx-auto bg-gradient-to-b from-gray-800 to-gray-900 rounded-[40px] p-2 shadow-2xl border-4 border-gray-800 relative">
              <!-- Notch -->
              <div class="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-black rounded-b-xl z-20"></div>
              
              <!-- Screen Content -->
              <div class="rounded-[32px] overflow-hidden bg-bg-primary h-[650px] relative w-full border border-white/5">
                <div class="absolute inset-0 bg-gradient-to-br from-bg-secondary to-bg-primary opacity-50"></div>
                
                <!-- Mockup UI -->
                <div class="relative z-10 p-6 flex flex-col h-full">
                  <div class="mt-8 flex justify-between items-center mb-8">
                    <div class="w-8 h-8 rounded-full bg-white/10"></div>
                    <div class="font-bold">L-Klàsico</div>
                    <div class="w-8 h-8 rounded-full bg-white/10"></div>
                  </div>

                  <div class="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 mb-6">
                    <div class="flex justify-between items-center text-center">
                      <div>
                         <div class="w-12 h-12 bg-barca-blue/20 rounded-full mx-auto mb-2 flex items-center justify-center text-xl">🛡️</div>
                         <div class="font-bold">Barça</div>
                      </div>
                      <div class="text-2xl font-black text-white/20">VS</div>
                      <div>
                         <div class="w-12 h-12 bg-real-gold/20 rounded-full mx-auto mb-2 flex items-center justify-center text-xl">👑</div>
                         <div class="font-bold">Real</div>
                      </div>
                    </div>
                  </div>

                  <div class="space-y-3 flex-1 overflow-hidden">
                     <div class="h-16 bg-white/5 rounded-xl animate-pulse"></div>
                     <div class="h-16 bg-white/5 rounded-xl animate-pulse delay-75"></div>
                     <div class="h-16 bg-white/5 rounded-xl animate-pulse delay-150"></div>
                  </div>

                  <div class="mt-auto pt-6">
                    <div class="w-full h-12 bg-gradient-end rounded-xl shadow-lg shadow-gradient-end/20"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Floating Elements -->
            <div class="absolute -right-12 top-1/4 p-4 bg-bg-secondary/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl animate-float-delayed">
              <span class="text-2xl">🔥</span>
            </div>
            <div class="absolute -left-12 bottom-1/4 p-4 bg-bg-secondary/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl animate-float">
              <span class="text-2xl">⚽</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section id="fonctionnalites" class="py-32 relative">
      <div class="container">
        <div class="text-center mb-20">
          <h2 class="text-4xl lg:text-5xl font-bold mb-6">Un jeu. Deux camps. <br/><span class="text-primary-blue">Une passion.</span></h2>
          <p class="text-white/50 max-w-2xl mx-auto text-lg">Découvrez les fonctionnalités qui rendent chaque match unique.</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(feature, i) in features" :key="i" class="feature-card group text-center" :style="{ animationDelay: `${i * 100}ms` }">
            <div class="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 group-hover:bg-gradient-end group-hover:text-white">
              {{ feature.icon }}
            </div>
            <h3 class="text-xl font-bold mb-3 group-hover:text-primary-blue transition-colors">{{ feature.title }}</h3>
            <p class="text-white/50 leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Teams Section -->
    <section id="equipes" class="py-32 relative overflow-hidden bg-white/5">
      <div class="absolute inset-0 bg-gradient-radial opacity-30 pointer-events-none"></div>
      <div class="container relative z-10">
        <div class="text-center mb-20 animate-fade-in-up">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 hover:bg-white/10 transition-colors">
            <span class="text-2xl">⚽</span>
            <span class="text-sm font-medium text-white/90">Choisissez votre camp</span>
          </div>
          <h2 class="text-4xl lg:text-5xl font-black mb-6">La rivalité éternelle. <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-barca-red to-real-gold">Qui soutiendrez-vous ?</span></h2>
          <p class="text-white/50 max-w-2xl mx-auto text-lg">Rejoignez une communauté, gagnez des points pour votre club et dominez le classement.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          <TeamCard
            team="barca"
            name="FC Barcelone"
            colors="Bleu & Grenat"
            description="Rejoignez les Blaugranas. Tiki-taka, Masia et histoire légendaire."
            class="animate-fade-in-left"
          />
          <TeamCard
            team="real"
            name="Real Madrid"
            colors="Blanc & Or"
            description="Rejoignez les Merengues. Galacticos, Rois de l'Europe et mentalité de gagnant."
            class="animate-fade-in-right"
          />
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="telecharger" class="py-32 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
      <div class="container relative z-10 text-center">
        <div class="max-w-4xl mx-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-[3rem] p-12 lg:p-20 border border-white/10 shadow-2xl relative overflow-hidden group">
          <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-end/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:opacity-100 transition-opacity duration-700 opacity-50"></div>
          
          <h2 class="text-4xl lg:text-6xl font-black mb-8 leading-tight">Prêt à entrer sur <br/>le terrain ?</h2>
          <p class="text-xl text-white/60 mb-10 max-w-2xl mx-auto">Rejoignez la communauté et commencez votre ascension vers la gloire.</p>
          
          <div class="flex flex-col sm:flex-row justify-center gap-4">
             <button class="btn btn-primary btn-xl min-w-[200px]">
               App Store
               <span class="opacity-50 ml-2 text-sm">iOS</span>
             </button>
             <button class="btn btn-glass btn-xl min-w-[200px]">
               Google Play
               <span class="opacity-50 ml-2 text-sm">Android</span>
             </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const features = [
  { icon: '⚔️', title: 'Duels PvP', description: 'Affrontez des supporters adverses en temps réel.' },
  { icon: '🏆', title: 'Tournois', description: 'Grimpez les échelons et remportez des trophées exclusifs.' },
  { icon: '🎴', title: 'Collection', description: 'Collectionnez les cartes de vos joueurs préférés.' },
  { icon: '🌍', title: 'Mondial', description: 'Représentez votre pays dans le classement mondial.' },
  { icon: '🎁', title: 'Récompenses', description: 'Gagnez des coins et débloquez du contenu premium.' },
  { icon: '⚡', title: 'Live Events', description: 'Participez aux événements pendant les vrais matchs.' },
]

const getParticleStyle = (n: number) => {
  return {
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    opacity: Math.random() * 0.5 + 0.1
  }
}
</script>

<style scoped>
.btn-glass {
  @apply bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold hover:bg-white/10 transition-all;
}

.btn-lg {
  @apply px-8 py-4 text-lg rounded-2xl;
}

.btn-xl {
   @apply px-10 py-5 text-xl rounded-2xl;
}

.feature-card {
  @apply p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-300;
}

.animate-pulse-slow {
  animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-float-delayed {
  animation: float 6s ease-in-out infinite;
  animation-delay: 2s;
}

.ease-out-expo {
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background-color: white;
  border-radius: 50%;
  animation: float-particle 10s linear infinite;
}

@keyframes float-particle {
  0% { transform: translateY(0) translateX(0); opacity: 0; }
  20% { opacity: 0.5; }
  80% { opacity: 0.5; }
  100% { transform: translateY(-100px) translateX(50px); opacity: 0; }
}
</style>
