document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menu-button')
  const mobileMenu = document.getElementById('mobile-menu')
  menuButton.addEventListener('click', (event) => {
    mobileMenu.classList.toggle('hidden')
    event.stopPropagation()
  })

  // when click some other place
  document.addEventListener('click', (event) => {
    if (
      !mobileMenu.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      mobileMenu.classList.add('hidden')
    }
  })
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      mobileMenu.classList.add('hidden')
    }
  })
})
