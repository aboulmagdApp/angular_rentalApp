import { ElementRef, Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
@Input() appHighlight;

  constructor(private el: ElementRef) { 
  }
  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.appHighlight;
  }

}
