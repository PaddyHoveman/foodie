
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

    this.color = color
    this.canvas = canvas
    this.canvasContext = canvasContext
  }

  draw() {
    
  }

  update() {
    this.draw()
  }
 }