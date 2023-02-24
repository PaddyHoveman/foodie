import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})

export class GamesComponent implements OnInit {
  track: HTMLElement
  nextPercentage: number = -50

  constructor() {}
  
  ngOnInit(): void {
    this.track = document.getElementById('game-card-container')!
    this.animateImages()
    this.updateCardLocationHandler(0)
  }

  public mouseDownHandler(event: MouseEvent) {
    this.track.dataset['mouseDownAt'] = event.clientX.toString()
  }

  public mouseMoveHandler(event: MouseEvent) {
    if (this.track.dataset['mouseDownAt'] === "0") return

    const mouseDelta = parseFloat(this.track.dataset['mouseDownAt']!) - event.clientX
    const maxDelta = window.innerWidth / 2;
    const percentage = (mouseDelta / maxDelta) * -100
    const nextPercentageUnconstrained = parseFloat(this.track.dataset['prevPercentage']!) + percentage

    this.nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    this.updateCardLocationHandler(1200)
    this.animateImages()
  }

  public mouseUpHandler() {
    this.track.dataset['mouseDownAt'] = "0"
    if (this.nextPercentage) this.track.dataset['prevPercentage'] = this.nextPercentage.toString()
  }

  private animateImages() {
    const images: any = this.track.getElementsByClassName('image')
  
    if (images.length) {
      for (const image of images) {
        image.animate({
          objectPosition: `${(100 + this.nextPercentage).toString()}% center`
        }, { duration: 1200, fill: "forwards" })
      }
    }
  }

  private updateCardLocationHandler(duration: number) {
    return this.track.animate({
      transform: `translate(${this.nextPercentage}%, -50%)`
    }, { duration: duration, fill: "forwards" })
  }
}