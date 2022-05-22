window.addEventListener('scroll', onScroll)

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(contact)
  activateMenuAtCurrentSection(about)
}

function activateMenuAtCurrentSection(section) {
  // a linha da seção
  const targetLine = scrollY + innerHeight / 2

  //Verificar se a seção passou da linha
  //Quais dados vou precisar ?

  //O top da seção
  const sectionTop = section.offsetTop

  // A altura da seção
  const sectionHeight = section.offsetHeight

  // O topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  //console.log('O topo da seção passou ou chegou na linha ?',sectionTopReachOrPassedTargetLine)

  //Verificar se a base está abaixo da linha alvo
  //Quais dados vou precisar ?

  //A seção termina onde ?
  const sectionEndsAt = sectionTop + sectionHeight

  //o final da seção passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  console.log('O fundo da seção passou da linha ?', sectionEndPassedTargetLine)

  //Limites da seção

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`#home, 
#home img, 
#home .stats, 
#services,
#services header, 
#services .card,
#about,
#about header,
#about .content,
#about img`) /* quando eu uso o ascento ` ao invés das aspas, eu permito a quebra de linha */
