
export class Sprite {
  position: { x: number, y: number }
  velocity: { x: number, y: number }
  attackBox: { position: { x: number, y: number }, width: number, height: number }
  height: number
  width: number
  lastKey: any
  color: string
  gravity: number = 0.2
  canvas: HTMLCanvasElement
  canvasContext: CanvasRenderingContext2D

  constructor({ position, velocity }: { position: { x: number, y: number }, velocity: { x: number, y: number } }, color: string = 'red', canvas: HTMLCanvasElement, canvasContext: CanvasRenderingContext2D){
    this.position = position
    this.velocity = velocity
    this.height = 150
    this.width = 50
    this.lastKey
    this.attackBox = {
      position: this.position,
      width: 100,
      height: 50
    }

    this.color = color
    this.canvas = canvas
    this.canvasContext = canvasContext
  }

  draw() {
    this.canvasContext.fillStyle = this.color
    this.canvasContext.fillRect(this.position.x, this.position.y, 50, 150)

    // attack
    this.canvasContext.fillStyle = 'yellow'
    this.canvasContext.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height)
  }

  update() {
    this.draw()
    this.position.y += this.velocity.y
    this.position.x += this.velocity.x
    
    if ((this.position.y + this.height + this.velocity.y) >= this.canvas.height) {
      this.velocity.y = 0
    } else {
      this.velocity.y += this.gravity
    }
  }
 }