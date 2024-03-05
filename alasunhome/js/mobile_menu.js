 var burger = document.querySelector('.open_menu')
 var cross = document.querySelector('.close_menu')
 var menu = document.querySelectorAll('.menu-main li')

function close_menu () {
 burger.style.display = 'block'
 cross.style.display = 'none'
 Array.from(menu).forEach(element => element.style.display = 'none')
}

function open_menu () {
 burger.style.display = 'none'
 cross.style.display = 'block'
 Array.from(menu).forEach(element => element.style.display = 'block')
}