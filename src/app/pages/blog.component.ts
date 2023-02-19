import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import TestData from './../../assets/test-data.json';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {
  public file: any
  public text: string
  public posts: any

  @ViewChild('blogText') textInput: ElementRef;

  constructor() {}

  ngOnInit(): void {
    this.posts = TestData
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