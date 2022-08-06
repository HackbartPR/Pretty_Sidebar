var toggle = false

document.addEventListener('DOMContentLoaded', () => {
  let btnMenu = document.getElementById('menuBtn')
  //ADICIONA UM EVENTO DE CLIQUE NO BOTÃO MENU
  btnMenu.addEventListener('click', () => {
    if (!toggle) {
      hideMenu()
      toggle = true
    } else {
      showMenu()
      toggle = false
    }
  })
})

function hideMenu() {
  // RETIRA A LOGO MARCA E O NOME DA MARCA
  let divBrand = document.getElementById('l-sidebar__brand-wrapper__brand')
  divBrand.classList.add('hideElements')

  //RETIRA A DIV DE PESQUISA
  let divSearch = document.getElementById('l-sideBar__search__input')
  divSearch.classList.add('hideElements')

  //RETIRA O INPUT DE PESQUISA
  let inputSearch = document.getElementById('e-search-input')
  inputSearch.classList.add('hideElements')

  //RETIRA O TEXTO DE DASHBOARD
  let spanDashboard = document.getElementById('l-sidebar__dashboard__text')
  spanDashboard.classList.add('hideElements')

  //RETIRA O TEXTO DE USER
  let spanUser = document.getElementById('l-sidebar__user__text')
  spanUser.classList.add('hideElements')

  //CENTRALIZA O ICONE DO MENU
  let divBtnMenu = document.getElementById('l-sidebar__brand-wrapper')
  divBtnMenu.classList.add('centerMenu')

  //AJUSTA O TAMANHO DA SIDEBAR PARA ACOMODAR SOMENTE OS ICONES
  let sideBar = document.getElementById('l-sideBar')
  sideBar.classList.add('hideSidebar')
}

function showMenu() {
  // RETIRA A LOGO MARCA E O NOME DA MARCA
  let divBrand = document.getElementById('l-sidebar__brand-wrapper__brand')
  divBrand.classList.remove('hideElements')

  //INSERE A DIV DE PESQUISA
  let divSearch = document.getElementById('l-sideBar__search__input')
  divSearch.classList.remove('hideElements')

  //INSERE O INPUT DE PESQUISA
  let inputSearch = document.getElementById('e-search-input')
  inputSearch.classList.remove('hideElements')

  //INSERE O TEXTO DE DASHBOARD
  let spanDashboard = document.getElementById('l-sidebar__dashboard__text')
  spanDashboard.classList.remove('hideElements')

  //INSERE O TEXTO DE USER
  let spanUser = document.getElementById('l-sidebar__user__text')
  spanUser.classList.remove('hideElements')

  //DESCENTRALIZA O ICONE DO MENU
  let divBtnMenu = document.getElementById('l-sidebar__brand-wrapper')
  divBtnMenu.classList.remove('centerMenu')

  //AJUSTA O TAMANHO DA SIDEBAR PARA ACOMODAR OS ICONES E OS TEXTOS
  let sideBar = document.getElementById('l-sideBar')
  sideBar.classList.remove('hideSidebar')
}
