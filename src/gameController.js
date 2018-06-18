export const gameController = {
  init (game) {
    this.possibleKeys = ['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', ' ']
    this.activeKeys = []

    window.addEventListener('keydown', e => {
      if (this.possibleKeys.includes(e.key) && !this.activeKeys.includes(e.key))
        this.activeKeys.push(e.key)
    })
    window.addEventListener('keyup', e => {
      if (this.possibleKeys.includes(e.key))
        this.activeKeys.splice(this.activeKeys.indexOf(e.key), 1)
    })
  }
}