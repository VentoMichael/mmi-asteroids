import { gameController } from './gameController'
import { ship } from './ship'

const game = {
  'canvas': document.getElementById('game'),
  'context': null,
  'spriteSheetSrc': './resources/sprite.png',
  'sprite': new Image(),
  'gameController': gameController,
  'ship': ship,
  'gravity': 0.9,
  'hasStarted': false,
  /*
  renderSpriteFrame (coordinates) {
    this.context.drawImage(this.sprite,
      coordinates.sx,
      coordinates.sy,
      coordinates.sw,
      coordinates.sh,
      coordinates.dx,
      coordinates.dy,
      coordinates.dw,
      coordinates.dh,
    )
  },
  */
  animate () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.ship.update()
    window.requestAnimationFrame((e) => {this.animate()})
  },

  init () {
    this.canvas.width = window.innerWidth * 0.9
    this.canvas.height = window.innerHeight * 0.9
    this.context = this.canvas.getContext('2d')
    this.sprite.addEventListener('load', (e) => {
      this.ship.init(this)
      this.gameController.init(this)
      this.animate()
    }, false)
    this.sprite.src = this.spriteSheetSrc
  }

}

game.init()
