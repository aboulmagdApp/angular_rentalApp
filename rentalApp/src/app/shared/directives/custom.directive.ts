import { ElementRef, Directive, Input, OnInit, ViewContainerRef, TemplateRef, OnChanges } from '@angular/core';

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

@Directive({
  selector: '[appNgFor]'
})
export class appNgForDirective implements OnChanges {
  
  @Input() appNgForOf: Array<any>;

  constructor(private container: ViewContainerRef,
    private template: TemplateRef<any>) {
  }
  ngOnChanges(){
   this.appNgForOf.forEach(value =>{
    this.container.createEmbeddedView(this.template, {$implicit: value});
   })
  }
 }