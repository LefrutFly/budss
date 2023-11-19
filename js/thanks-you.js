const closeThanksYouButtons = document.querySelectorAll('.close-thank-you')
const thankYouScreen = document.getElementById('thank-you')

thankYouScreen.style.display = 'none'

closeThanksYouButtons.forEach(function (button) {
	button.addEventListener('click', function () {
		thankYouScreen.style.display = 'none'
	})
})
