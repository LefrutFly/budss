const acceptCookies = document.getElementById('accept-cookies')
const declineCookies = document.getElementById('decline-cookies')
const closeCookies = document.getElementById('close-cookies')
const cookiesScreen = document.getElementById('cookies')

acceptCookies.addEventListener('click', function () {
	cookiesScreen.style.display = 'none'
})

declineCookies.addEventListener('click', function () {
	cookiesScreen.style.display = 'none'
})

closeCookies.addEventListener('click', function () {
	cookiesScreen.style.display = 'none'
})
