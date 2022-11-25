import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'yellow';
  @Input() highlightColor: string = 'green';
  @HostBinding('style.backgroundColor') backgroundColor!: string;

  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'purple')
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'purple')
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent')
    this.backgroundColor = this.highlightColor;
  }
}

