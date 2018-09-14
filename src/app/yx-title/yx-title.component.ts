import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-yx-title',
  templateUrl: './yx-title.component.html',
  styleUrls: ['./yx-title.component.css']
})
export class YxTitleComponent implements OnInit {

  private m_caption: string = "not initial...";
  private m_captionClass = '';
  private m_contentClass = '';

  @Input() capStyle: any;
  @Input() contentStyle: any;

  @Input() captionClass: any;
  // set captionClass(value) { //标题的css类名
  //   console.log('captionClass属性设值%o', value);
  //   this.m_captionClass = value;
  // }
  // get captionClass(): string {
  //   return this.m_captionClass;
  // }

  @Input() 
  contentClass: string; //标题的css类名 

  @Input() 
  set caption(capValue: string) {
    console.log('caption属性设值%o', capValue);
    this.m_caption = capValue;
  };
  get caption(): string {
    return `标题值:${this.m_caption}`;
  }
  

  constructor() { }

  ngOnInit() {
  }

}
