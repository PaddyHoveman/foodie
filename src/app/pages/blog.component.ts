import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {

  @ViewChild('blogText') textInput: ElementRef;

  public file: any
  public text: string

  constructor() {}

  ngOnInit(): void {
    
  }

  addAttachment(event: any) {
    this.file = event.target.files[0]
  }

  keyDownFunction(event: KeyboardEvent) {
    if (event.code !== 'Enter') return

    this.textInput.nativeElement.value = ''

    console.log(this.file, this.text)
  }
}