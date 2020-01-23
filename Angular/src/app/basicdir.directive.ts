import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBasicdir]'
})
export class BasicdirDirective implements OnInit {

  constructor(private elementref: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.renderer.setStyle(this.elementref.nativeElement, 'background-color', 'yellow');
  }
}
