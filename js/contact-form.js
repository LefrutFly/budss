const errorTextL = document.querySelector('.error-validation-l')
const phoneInput = document.getElementById('contact-form-phone')

function openThankYouScreen() {
	contactForm.style.display = 'none'
	thankYouScreen.style.display = 'flex'
	document
		.querySelectorAll('.contact-form__input')
		.forEach(input => (input.value = ''))
}

function validation(form) {
	let result = true

	const allInputs = form.querySelectorAll('input')

	allInputs.forEach(input => {
		if (input.dataset.required === 'true') {
			const error = input.parentNode.querySelector('p')

			if (input.value.trim().length === 0) {
				result = false
				error.innerText = 'This field is required.'
				input.classList.add('error')
			} else {
				error.innerText = ''
				input.classList.remove('error')
			}
		}
	})

	return result
}

document
	.getElementById('contact-form')
	.addEventListener('submit', function (event) {
		event.preventDefault()

		if (validation(this) === true) {
			errorTextL.innerText = ''
			openThankYouScreen()
		} else {
			errorTextL.innerText = 'Please fill in all required fields'
		}
	})
