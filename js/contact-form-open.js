const closeContactForm = document.getElementById('close-contact-form')
const openContactForms = document.querySelectorAll('.open-contact-form')
const contactForm = document.getElementById('contact-form-section')

contactForm.style.display = 'none'

closeContactForm.addEventListener('click', function () {
	contactForm.style.display = 'none'
})

openContactForms.forEach(function (openContactForm) {
	openContactForm.addEventListener('click', function () {
		contactForm.style.display = 'flex'
	})
})
