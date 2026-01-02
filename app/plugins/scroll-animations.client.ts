export default defineNuxtPlugin(() => {
  if (process.client) {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Observer les éléments avec la classe scroll-fade-in
    const observeElements = () => {
      const elements = document.querySelectorAll('.scroll-fade-in')
      elements.forEach((el) => {
        observer.observe(el)
      })
    }

    // Observer au chargement
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', observeElements)
    } else {
      observeElements()
    }
    
    // Réobserver périodiquement pour les éléments chargés dynamiquement
    setInterval(observeElements, 1000)
  }
})
