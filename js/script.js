const sections = document.querySelectorAll('.js-scroll')
const windowHeight = window.innerHeight * 0.4

function animateScroll() {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top - windowHeight
    const isSectionVisible = sectionTop - windowHeight < 0
    if (isSectionVisible) {
      section.classList.add('active')
    } else {
      section.classList.remove('active')
    }
  })
}
animateScroll()
window.addEventListener('scroll', animateScroll)