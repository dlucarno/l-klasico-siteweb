export default defineNuxtPlugin(() => {
  if (process.client) {
    // Smooth scroll pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href')
        if (href && href !== '#') {
          e.preventDefault()
          const target = document.querySelector(href)
          if (target) {
            const headerOffset = 80
            const elementPosition = target.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }
        }
      })
    })
  }
})

