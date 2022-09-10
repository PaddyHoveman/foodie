import { Component, OnInit } from "@angular/core";
import * as moment from "moment";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  public welcomeMessage: string = 'Good evening'
  public hasBeenToggled: boolean = false

  constructor() {}

  ngOnInit(): void {
    this.calculateWelcomeMessage()
  }

  private calculateWelcomeMessage(): void {
    const currentTime = moment(new Date())
    const format: string = 'hh:mm:ss'

    if (currentTime.isBetween(moment('03:00:00', format), moment('11:59:59', format))) this.welcomeMessage = 'Good morning'
    if (currentTime.isBetween(moment('12:00:00', format), moment('16:59:59', format))) this.welcomeMessage = 'Good afternoon'
  }

  public openModal(event: MouseEvent): void {
    event.stopPropagation()
    this.hasBeenToggled = !this.hasBeenToggled
  }

  public closeModal(): void {
    this.hasBeenToggled = false
  }
}