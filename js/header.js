window.addEventListener('scroll', () => {
	const header = document.getElementById('sticky-header')
	const headerHeight = header.getBoundingClientRect().height
	const scrollTop = window.scrollY

	if (scrollTop > headerHeight) {
		header.classList.add('sticky')
	} else {
		header.classList.remove('sticky')
	}
})
