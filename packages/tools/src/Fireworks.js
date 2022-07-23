import { useEffect } from 'react'
import PropTypes from 'prop-types'

const pyrotechnist = ({
	fade = 0.12,
	radius: radiusProp = 8,
	gravity = 1,
	opening = 8,
	intensity = 0.04
} = {}) => {
	let ctx = null
	let canvas = null
	let controller = null

	// try to change the values on your own, dont forget to set autoAdjustValues to false!!!!
	// ------vip variables------ (in the explosion namespace)
	const explosion = {
		minVelocityY: 20,
		minVelocityX: -5,
		deltaVelocityX: 10,
		deltaVelocityY: 17,
		maxParticles: 40, // how many small particles will spawn
		particleSpeed: 7, // speed of a small particle
		particleGravity: 0.1, // gravity for the particles
		particleLifeTime: 40, // in frames
		autoAdjustValues: true // <--name should be enough
	}

	function rnd(n, min = 0) {
		return Math.random() * n + min
	}

	function rndByte() {
		return Math.floor(rnd(255, 40))
	}

	function rgba() {
		return `rgba(${rndByte()}, ${rndByte()}, ${rndByte()}, .8)`
	}

	// the Particle class, a particle is the small dot that spaws when the firework explodes
	function Particle(x, y, radius, angle, color, speed) {
		this.x = x // x coordinate
		this.y = y // y coordinate
		this.radius = radius // radius of a particle
		this.speed = speed // speed of a particle
		this.color = color // the COLOR what did you expect?
		this.angle = angle // the angle in which the particle will move (direction)
		this.velocityX = Math.cos(this.angle) * this.speed // X velocity
		this.velocityY = Math.sin(this.angle) * this.speed // Y velocity
		this.age = 0 // the age of a particle (increases each frame)

		// update the particles (move them)
		this.update = function () {
			this.x += this.velocityX
			this.y += this.velocityY

			this.velocityY += explosion.particleGravity
			this.age++

			// delete them after they reach a specific age
			if (this.age > explosion.particleLifeTime) {
				// true == deleteThisPArticle :(
				return true
			}
		}

		// draw the particle
		this.draw = function () {
			ctx.beginPath()
			ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
			ctx.fillStyle = this.color
			ctx.lineWidth = 1
			ctx.fill()
		}
	}

	function fire() {
		// a single firework
		function Firework() {
			// current x and y coordinates
			// random spawn at the bottom of the canvas
			this.x = window.innerWidth / 5 + Math.random() * (window.innerWidth / 5) * 3
			this.y = window.innerHeight

			// x-movement
			this.VelocityX = explosion.minVelocityX + Math.random() * explosion.deltaVelocityX

			// y-movement (goes upwards)
			this.VelocityY =
				(explosion.minVelocityY + Math.random() * explosion.deltaVelocityY) * -1

			// current radius
			this.radius = rnd(radiusProp, 1)

			// is the firework still alive? Did it explode?
			this.alive = true

			// the color a single firework
			this.color = rgba()

			// little particles after the explosion
			this.particles = []

			// cmon, the name is enough
			this.noParticlesLeft = false

			// draw the firework
			this.draw = function () {
				ctx.beginPath()
				ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
				ctx.fillStyle = this.color
				ctx.lineWidth = 1
				ctx.fill()
			}

			// no longer draws the firework, only the particles - use this after the explosion
			this.explode = function () {
				// if no particles exist yet - create new ones
				this.particles = this.particles.length > 0 ? this.particles : this.createParticles()

				// update all the particles
				for (let i = 0; i < this.particles.length; i++) {
					this.particles[i].draw()
					if (this.particles[i].update()) {
						this.particles.splice(i, 1)
					}
					// oops we've run out of particles, time to clear the memory and remove the element from the array
					if (this.particles.length === 0) {
						this.noParticlesLeft = true
					}
				}
			}

			// create an array containing n particles
			this.createParticles = function () {
				const { maxParticles } = explosion
				const temporaryParticleArray = []

				// used for special shapes
				const effectIndex = Math.floor(Math.random() * 8)

				for (let i = 0; i < maxParticles; i++) {
					temporaryParticleArray.push(
						new Particle(
							this.x,
							this.y,
							this.radius / 2,
							((Math.PI * 2) / maxParticles) * i,
							this.color,
							this.getEffect(effectIndex, i)
						)
					)
				}
				return temporaryParticleArray
			}

			this.getEffect = function (effectIndex, i) {
				switch (effectIndex) {
					case 1:
						return i / 3.5
					case 2:
						return Math.abs(Math.sin(i) * 6)
					case 3:
						return Math.abs(Math.cos(i) * 6)
					case 4:
						return Math.sqrt(i * Math.PI) + 2
					case 5:
						return i % 2
					case 6:
						return i % 3
					case 7:
						return i % 7
					default:
						return explosion.particleSpeed
				}
			}

			// update the firework (move it)
			this.update = function () {
				this.x += this.VelocityX
				this.y += this.VelocityY

				this.VelocityY += gravity

				if (this.VelocityY >= 0) {
					this.alive = false
				}
			}
		}

		// The Brain (or the Controller)
		function Controller() {
			// all the visible fireworks are stored here
			this.raf = null
			this.fireworks = []

			// create all the fireworks (only 1 time at the beginning)
			this.start = function () {
				for (let i = 0; i < opening; i++) {
					this.fireworks.push(new Firework())
				}
			}

			// update all the fireworks
			this.update = function () {
				for (let i = 0; i < this.fireworks.length; i++) {
					const currentFirework = this.fireworks[i]
					currentFirework.update()
					if (currentFirework.alive) {
						currentFirework.draw()
					} else if (currentFirework.noParticlesLeft) {
						this.fireworks.splice(i, 1)
					} else {
						currentFirework.explode()
					}
				}

				// a little trick in ES6 (keep 'this')
				this.raf = window.requestAnimationFrame(() => this.update())

				// clear the canvas each frame
				ctx.globalAlpha = fade
				ctx.globalCompositeOperation = 'destination-out'
				ctx.fillRect(0, 0, canvas.width, canvas.height)
				ctx.globalCompositeOperation = 'source-over'
				ctx.globalAlpha = 1

				// create new Fireworks for the next Frame
				// when you're lucky, a new firework will spawn ^^
				if (Math.random() < intensity) {
					this.fireworks.push(new Firework())
				}
			}

			this.destroy = function () {
				window.cancelAnimationFrame(this.raf)
			}
		}

		// create the controller, initialize it and call the update function
		// which starts the animation (I use requestAnimationFrame for that)
		controller = new Controller()
		controller.start()
		controller.update()
	}

	function adjustCanvas() {
		canvas.width = window.innerWidth
		canvas.height = window.innerHeight
	}

	function adjustValues() {
		if (!explosion.autoAdjustValues) return

		let heigthReached = 0
		let velocityY = 0

		while (heigthReached < window.innerHeight) {
			velocityY += gravity
			heigthReached += velocityY
		}

		explosion.minVelocityY = velocityY / 2
		explosion.deltaVelocityY = velocityY - explosion.minVelocityY

		explosion.minVelocityX = (window.innerWidth / 4 / (velocityY / 2)) * -1
		explosion.deltaVelocityX = 2 * explosion.minVelocityX * -1
	}

	function create() {
		canvas = document.createElement('canvas')
		canvas.id = 'fireworks'
		canvas.style.zIndex = '9999'
		canvas.style.pointerEvents = 'none'
		canvas.style.position = 'fixed'
		canvas.style.top = 0
		canvas.style.left = 0
		ctx = canvas.getContext('2d')
		document.body.appendChild(canvas)
	}

	function resize() {
		adjustCanvas()
		adjustValues()
	}

	function start() {
		create()
		resize()
		window.addEventListener('resize', resize)
		fire()
	}

	function destroy() {
		controller.destroy()
		window.removeEventListener('resize', resize)
		document.body.removeChild(canvas)
	}

	return {
		start,
		destroy
	}
}

const Fireworks = ({ fade, radius, gravity, opening, intensity }) => {
	useEffect(() => {
		const fireworks = pyrotechnist({ fade, radius, gravity, opening, intensity })
		fireworks.start()

		return () => {
			fireworks.destroy()
		}
	}, [fade, radius, gravity, opening, intensity])

	return null
}

Fireworks.propTypes = {
	fade: PropTypes.number,
	radius: PropTypes.number,
	gravity: PropTypes.number,
	opening: PropTypes.number,
	intensity: PropTypes.number
}

export default Fireworks
