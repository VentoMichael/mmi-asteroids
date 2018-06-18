import { gameController } from './gameController'
import { ship } from './ship'
import { Ammo } from './Ammo'

const game = {
  'canvas': document.getElementById('game'),
  'context': null,
  'gameController': gameController,
  'ship': ship,
  'minIntervalBetweenShots': 20,
  'shotsTimer': 0,
  'ammos': [],

  animate () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.ship.update()

    if (this.ammos.length) {
      this.ammos.forEach(ammo => {ammo.update()})
    }

    if (this.gameController.activeKeys.includes(' ')) {
      this.shotsTimer++
      if (this.shotsTimer % 20 === 1) {
        this.ammos.push(new Ammo(this))
        this.shotsTimer = 1
      }
    }else{
      this.shotsTimer = 0
    }

    window.requestAnimationFrame(e => {this.animate()})
  },

  init () {
    this.canvas.width = window.innerWidth * 0.9
    this.canvas.height = window.innerHeight * 0.9
    this.context = this.canvas.getContext('2d')
    this.ship.init(this)
    this.gameController.init(this)
    this.animate()
  },

  destroyAmmo (ammo) {
    this.ammos.splice(this.ammos.indexOf(ammo), 1)
  }
}

game.init()
