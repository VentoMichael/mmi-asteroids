export class Ammo {
  constructor (game) {
    console.log('t')
    this.game = game
    this.x = this.game.ship.x
    this.y = this.game.ship.y
    this.direction = this.game.ship.direction
    this.speed = this.game.ship.speed + 5
  }

  update () {
    this.x += this.speed * Math.cos(this.direction)
    this.y += this.speed * Math.sin(this.direction)
    if (this.x > this.game.canvas.width ||
      this.y > this.game.canvas.height ||
      this.x < 0 ||
      this.y < 0)
      this.game.destroyAmmo(this)
    this.render()
  }

  render () {
    this.game.context.fillStyle = '#fff'
    this.game.context.save()
    this.game.context.translate(this.x, this.y)
    this.game.context.rotate(this.direction)
    this.game.context.fillRect(-2, -2, 4, 4)
    this.game.context.restore()
  }
}