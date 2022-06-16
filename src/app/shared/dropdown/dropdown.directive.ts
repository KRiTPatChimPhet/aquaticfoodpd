import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.show') dropDown: boolean = false;

  constructor(private elment: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') toggleOpen(eventData: Event) {
    this.dropDown = !this.dropDown;
    let part = this.elment.nativeElement.querySelector('.dropdown-menu');
    if(this.dropDown)this.renderer.addClass(part, 'show');
    else this.renderer.removeClass(part, 'show')
  }
}
