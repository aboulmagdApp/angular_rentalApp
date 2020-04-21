import { ElementRef, Directive, Input, OnInit, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() appHighlight;

  constructor(private el: ElementRef) {
  }
  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.appHighlight;
  }
}

@Directive({
  selector: '[appNgIf]'
})
export class NgIfDirective {
  hasView = false;
  @Input() set appNgIf(condition: boolean){
    if(condition && !this.hasView){
      this.container.createEmbeddedView(this.template);
      this.hasView = true;
    }
    else if(!condition && this.hasView){
      this.container.clear();
      this.hasView = false;
    }
  };
 
  constructor(private container: ViewContainerRef,
    private template: TemplateRef<any>) {
  }
}