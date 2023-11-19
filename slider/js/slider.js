const WIDTH_SLIDE = 540
const DURATION = 300

const sliderLine = document.querySelector('.slider__line')
const sliderDotBox = document.querySelector('.wrapper-dots')
const sliderDot = document.querySelector('.wrapper__dot')
const sliderDots = [sliderDot]
const buttonNext = document.querySelector('.button-next')
const buttonPrevious = document.querySelector('.button-previous')

let sliderItems = document.querySelectorAll('.slider__item')

let currentSlide = 0
let animationBlock = false

const createDots = () => {
	for (let index = 1; index < sliderItems.length; index++) {
		const clone = sliderDot.cloneNode(true)
		sliderDotBox.appendChild(clone)
		sliderDots.push(clone)
	}
	sliderDots[0].classList.add('wrapper__dot_active')
}
createDots()

const activateDots = () => {
	sliderDots.forEach((item, index) => {
		if (index === currentSlide) item.classList.add('wrapper__dot_active')
		else item.classList.remove('wrapper__dot_active')
	})
}

const moveSlide = (targetX, duration, callback = () => {}) => {
	animationBlock = true

	const object = sliderLine
	const start = performance.now()
	const startX = parseFloat(getComputedStyle(object).left) || 0

	function animate(currentTime) {
		const elapsed = currentTime - start
		const progress = Math.min(elapsed / duration, 1)
		const currentX = startX + (targetX - startX) * progress

		object.style.left = currentX + 'px'

		if (progress < 1) {
			requestAnimationFrame(animate)
		} else {
			if (callback) {
				animationBlock = false
				callback()
			}
		}
	}

	requestAnimationFrame(animate)
}

const nextSlide = (duration, callback) => {
	if (animationBlock === true) return

	if (currentSlide >= sliderItems.length - 1) {
		currentSlide = 0
	} else {
		currentSlide++
	}

	moveSlide(-WIDTH_SLIDE, duration, () => {
		sliderLine.style.left = '0px'
		const item = sliderItems[0]
		sliderLine.removeChild(item)
		sliderLine.appendChild(item)
		sliderItems = document.querySelectorAll('.slider__item')
		activateDots()
		callback()
	})
}

const previousSlide = (duration, callback) => {
	if (animationBlock === true) return

	if (currentSlide <= 0) {
		currentSlide = sliderItems.length - 1
	} else {
		currentSlide--
	}

	const item = sliderItems[sliderItems.length - 1]
	sliderLine.removeChild(item)
	sliderLine.insertBefore(item, sliderLine.firstElementChild)
	sliderItems = document.querySelectorAll('.slider__item')
	sliderLine.style.left = -WIDTH_SLIDE + 'px'
	moveSlide(0, duration, () => {
		activateDots()
		callback()
	})
}

const recursiveNextSlide = (n, duration, callback = () => {}) => {
	console.log(duration)
	if (n === 0) {
		callback()
	} else {
		nextSlide(duration, () => {
			recursiveNextSlide(n - 1, duration, callback)
		})
	}
}

const recursivePreviousSlide = (n, duration, callback = () => {}) => {
	if (n === 0) {
		callback()
	} else {
		previousSlide(duration, () => {
			recursivePreviousSlide(n - 1, duration, callback)
		})
	}
}

const openDotsSlide = index => {
	if (index === currentSlide) return

	if (index > currentSlide) {
		const offset = index - currentSlide
		const duration = DURATION / offset
		recursiveNextSlide(offset, duration)
	} else {
		const offset = currentSlide - index
		const duration = DURATION / offset
		recursivePreviousSlide(offset, duration)
	}
}

sliderDots.forEach((item, index) =>
	item.addEventListener('click', () => openDotsSlide(index))
)
buttonNext.addEventListener('click', () => nextSlide(DURATION, () => {}))
buttonPrevious.addEventListener('click', () =>
	previousSlide(DURATION, () => {})
)
