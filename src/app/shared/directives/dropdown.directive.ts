import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.show') dropDown: boolean = false;

  constructor(private _elment: ElementRef,
              private _renderer: Renderer2) { }

  @HostListener('click') toggleOpen(eventData: Event): void {
    this.dropDown = !this.dropDown;
    let part = this._elment.nativeElement.querySelector('.dropdown-menu');

    if (this.dropDown) {
      this._renderer.addClass(part, 'show');
    } else {
      this._renderer.removeClass(part, 'show');
    }
  }
}
