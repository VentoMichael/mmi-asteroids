export const ship = {

  init (game) {
    this.game = game
    this.speed = 0
    this.maxSpeed = 10
    this.acceleration = 0.03
    this.direction = 0
    this.rotation = 0.1
    this.x = this.game.canvas.width / 2
    this.y = this.game.canvas.height / 2
  },

  update () {
    this.updateRotation()
    this.updateSpeed()
    this.x += this.speed * Math.cos(this.direction)
    this.y += this.speed * Math.sin(this.direction)
    if (this.x > this.game.canvas.width) this.x = 0
    if (this.y > this.game.canvas.height) this.y = 0
    if (this.x < 0) this.x = this.game.canvas.width
    if (this.y < 0) this.y = this.game.canvas.height
    this.render()
  },

  updateRotation () {
    let orientation = 0
    if (this.game.gameController.activeKeys.includes('ArrowRight'))
      orientation = 1
    if (this.game.gameController.activeKeys.includes('ArrowLeft'))
      orientation = -1
    this.direction += orientation * this.rotation
  },

  updateSpeed () {
    let power = 0
    if (this.game.gameController.activeKeys.includes('ArrowUp'))
      power = 1
    if (this.game.gameController.activeKeys.includes('ArrowDown'))
      power = -1
    this.speed += power * this.acceleration
    if (this.speed > this.maxSpeed) this.speed = this.maxSpeed
    else if (this.speed < -this.maxSpeed) this.speed = -this.maxSpeed
  },

  render () {
    this.game.context.strokeStyle = '#fff'
    this.game.context.fillStyle = '#fff'
    this.game.context.save()
    this.game.context.translate(this.x, this.y)
    this.game.context.rotate(this.direction)
    this.game.context.beginPath()
    this.game.context.moveTo(0, -5)
    this.game.context.lineTo(10, 0)
    this.game.context.lineTo(0, 5)
    this.game.context.closePath()
    this.game.context.stroke()
    this.game.context.fillRect(10, -2, 4, 4)
    this.game.context.restore()
  }
}