const openMenuButton = document.getElementById('openMenuButton')
const closeMenuButton = document.getElementById('closeMenuButton')
const fullscreenMenu = document.getElementById('mobileMenu')

openMenuButton.addEventListener('click', function () {
	fullscreenMenu.classList.remove('hidden')
	document.body.style.overflow = 'hidden'
})

closeMenuButton.addEventListener('click', function () {
	fullscreenMenu.classList.add('hidden')
	document.body.style.overflow = 'auto'
})
