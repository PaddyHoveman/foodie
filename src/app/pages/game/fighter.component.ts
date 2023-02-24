import { Component, OnInit } from "@angular/core";
import { Sprite } from "src/app/models/sprite.model";

@Component({
  selector: 'app-fighter',
  templateUrl: './fighter.component.html',
  styleUrls: ['./fighter.component.scss']
})

export class GameComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    const canvas: HTMLCanvasElement | null = document.querySelector('canvas')
    const c: CanvasRenderingContext2D | undefined | null = canvas?.getContext('2d')

    if (!canvas) return

    canvas.width = 1024
    canvas.height = 576

    c?.fillRect(0, 0, canvas.width, canvas.height)

    const playerOne = new Sprite({ position: { x: 150, y: 0 }, velocity: { x: 0, y: 0 }}, 'blue', canvas, c!)
    const playerTwo = new Sprite({ position: { x: canvas.width - 150, y: 0 }, velocity: { x: 0, y: 0 }}, 'green', canvas, c!)

    const keys = {
      a: { pressed: false },
      d: { pressed: false },
      w: { pressed: false },
      j: { pressed: false },
      l: { pressed: false },
      i: { pressed: false },
    }

    playerOne.draw()
    playerTwo.draw()

    const animate = () => {
      window.requestAnimationFrame(animate)
      c!.fillStyle = 'black'
      c?.fillRect(0, 0, canvas.width, canvas.height)
      playerOne.update()
      playerTwo.update()

      playerOne.velocity.x = 0
      playerTwo.velocity.x = 0

      // playerOne movement
      if (keys.a.pressed && playerOne.lastKey === 'a') {
        playerOne.velocity.x = -2
      } else if (keys.d.pressed && playerOne.lastKey === 'd') {
        playerOne.velocity.x = 2
      }
      // playerTwo movement
      if (keys.j.pressed && playerTwo.lastKey === 'j') {
        playerTwo.velocity.x = -2
      } else if (keys.l.pressed && playerTwo.lastKey === 'l') {
        playerTwo.velocity.x = 2
      }

      // collision
      if (playerOne.attackBox.position.x + playerOne.attackBox.width >= playerTwo.position.x &&
        playerOne.attackBox.position.x <= playerTwo.position.x + playerTwo.width &&
        playerOne.attackBox.position.y + playerOne.attackBox.height >= playerTwo.position.y &&
        playerOne.attackBox.position.y <= playerTwo.position.y + playerTwo.height
      ) {
        console.log('hit')
      }
    }

    animate()

    window.addEventListener('keydown', (event) => {
      switch(event.key) {
        case 'a':
          keys.a.pressed = true
          playerOne.lastKey = 'a'
        break
        case 'd':
          keys.d.pressed = true
          playerOne.lastKey = 'd'
        break
        case 'w':
          playerOne.velocity.y = -5
        break

        case 'l':
          keys.l.pressed = true
          playerTwo.lastKey = 'l'
        break
        case 'j':
          keys.j.pressed = true
          playerTwo.lastKey = 'j'
        break
        case 'i':
          playerTwo.velocity.y = -5
        break
      }
    })
    window.addEventListener('keyup', (event) => {
      switch(event.key) {
        case 'a':
          keys.a.pressed = false
        break
        case 'd':
          keys.d.pressed = false
        break
        case 'w':
          keys.d.pressed = false
        break
        case 'j':
          keys.j.pressed = false
        break
        case 'l':
          keys.l.pressed = false
        break
        case 'i':
          keys.i.pressed = false
        break
      }
    })
  }
}