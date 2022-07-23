import { useEffect } from 'react'
import PropTypes from 'prop-types'

function rnd(n, min = 0) {
	return Math.random() * n + min
}

function rndDirection(n) {
	return Math.random() >= 0.5 ? n * -1 : n
}

const snower = ({
	count = 32,
	speed = 0.5,
	radius = 4,
	color = '#ffffff',
	container: containerProp
} = {}) => {
	const flakes = []
	const vMaxX = speed * 0.4
	const vMaxY = speed * 0.8
	const vRndX = rndDirection(rnd(vMaxX, 0.2))
	const vRndY = rnd(vMaxY, 0.2)

	let raf = null
	let ctx = null
	let canvas = null
	let observer = null
	let container = null

	function Flake() {
		this.init = function () {
			this.r = rnd(radius, 2)
			this.d = this.r * 2

			this.x = rnd(canvas.width, -this.d)
			this.y = rnd(canvas.height, this.d) * -1
			this.vX = (vRndX / Math.abs(vRndX)) * (Math.abs(vRndX) + rnd(vMaxX, 0.1))
			this.vY = vRndY + rnd(vMaxY, 0.1)
			this.color = color
		}

		this.move = function () {
			this.x += Number(this.vX)
			this.y += this.vY

			if (this.x > canvas.width) {
				this.x = 1
			} else if (this.x + this.d < 0) {
				this.x = canvas.width
			}

			if (this.y > canvas.height) {
				this.init()
			}

			this.draw()
		}

		this.draw = function () {
			ctx.beginPath()
			ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
			ctx.fillStyle = this.color
			ctx.fill()
		}
	}

	function where() {
		if (!containerProp) {
			return document.body
		}

		if (typeof containerProp === 'string') {
			return document.querySelector(containerProp)
		}

		return containerProp
	}

	function resize() {
		if (!containerProp) {
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight
		} else {
			canvas.width = container.clientWidth
			canvas.height = container.clientHeight
			canvas.width = container.scrollWidth
			canvas.height = container.scrollHeight
		}
	}

	function create() {
		canvas = document.createElement('canvas')
		canvas.style.position = containerProp ? 'absolute' : 'fixed'
		canvas.style.zIndex = '9999'
		canvas.style.pointerEvents = 'none'
		canvas.style.top = 0
		canvas.style.left = 0
		ctx = canvas.getContext('2d')
		container = where()
		container.style.position = containerProp ? 'relative' : container.style.position
		container.appendChild(canvas)
	}

	function observe() {
		if (!containerProp) {
			window.addEventListener('resize', resize)
		} else {
			observer = new ResizeObserver(resize)
			observer.observe(containerProp ? container : document.documentElement)
		}
	}

	function spawn() {
		for (let i = 0; i < count; i++) {
			flakes[i] = new Flake()
			flakes[i].init()
		}
	}

	function update() {
		ctx.clearRect(0, 0, canvas.width, canvas.height)
		flakes.forEach((flake) => flake.move())
		raf = window.requestAnimationFrame(update)
	}

	function start() {
		if (!raf) {
			create()
			resize()
			observe()
			spawn()
			update()
		}
	}

	function stop() {
		window.cancelAnimationFrame(raf)
		raf = null
	}

	function remove() {
		container.removeChild(canvas)
		container = null
		canvas = null
		ctx = null
	}

	function unobserve() {
		if (!containerProp) {
			window.removeEventListener('resize', resize)
		} else {
			observer.unobserve(container)
			observer = null
		}
	}

	function destroy() {
		stop()
		remove()
		unobserve()
	}

	return {
		start,
		destroy
	}
}

const Snow = ({ count, speed, radius, color, container }) => {
	useEffect(() => {
		const snow = snower({ count, speed, radius, color, container })
		snow.start()

		return () => {
			snow.destroy()
		}
	}, [count, speed, radius, color, container])

	return null
}

Snow.propTypes = {
	count: PropTypes.number,
	speed: PropTypes.number,
	radius: PropTypes.number,
	color: PropTypes.string,
	container: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Element)])
}

export default Snow
