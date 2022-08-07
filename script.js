var toggle = false

document.addEventListener('DOMContentLoaded', () => {
  let btnMenu = document.getElementById('menuBtn')
  //ADICIONA UM EVENTO DE CLIQUE NO BOTÃO MENU
  btnMenu.addEventListener('click', hideMenu)
})

function hideMenu() {
  // RETIRA A LOGO MARCA E O NOME DA MARCA
  let divBrand = document.getElementById('l-sidebar__brand-wrapper__brand')
  divBrand.classList.toggle('showElements')

  //RETIRA A DIV DE PESQUISA
  let divSearch = document.getElementById('l-sideBar__search__input')
  divSearch.classList.toggle('showElements')

  //RETIRA O INPUT DE PESQUISA
  let inputSearch = document.getElementById('e-search-input')
  inputSearch.classList.toggle('showElements')

  //RETIRA O TEXTO DE DASHBOARD
  let spanDashboard = document.getElementById('l-sidebar__dashboard__text')
  spanDashboard.classList.toggle('showElements')

  //RETIRA O TEXTO DE USER
  let spanUser = document.getElementById('l-sidebar__user__text')
  spanUser.classList.toggle('showElements')

  //RETIRA O TEXTO DE MESSAGES
  let spanMessages = document.getElementById('l-sidebar__messages__text')
  spanMessages.classList.toggle('showElements')

  //RETIRA O TEXTO DE ANALYTICS
  let spanAnalytics = document.getElementById('l-sidebar__analytics__text')
  spanAnalytics.classList.toggle('showElements')

  //RETIRA O TEXTO DE FOLDER
  let spanFolder = document.getElementById('l-sidebar__folder__text')
  spanFolder.classList.toggle('showElements')

  //RETIRA O TEXTO DE ORDER
  let spanOrder = document.getElementById('l-sidebar__order__text')
  spanOrder.classList.toggle('showElements')

  //CENTRALIZA O ICONE DO MENU
  let divBtnMenu = document.getElementById('l-sidebar__brand-wrapper')
  divBtnMenu.classList.toggle('centerMenu')

  //AJUSTA O TAMANHO DA SIDEBAR PARA ACOMODAR SOMENTE OS ICONES
  let sideBar = document.getElementById('l-sideBar')
  sideBar.classList.toggle('showSidebar')
}
