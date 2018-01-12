import { Directive } from '@angular/core';
import { HostBinding } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({ 
    selector: '[appHover]'
})
export class HoverDirective {
    constructor() { }

    @HostBinding('class.hovered') isHovererd = false

    @HostListener('mouseenter') onMousEenter() {
        this.isHovererd = true
    }

    @HostListener('mouseleave') onMousLeave() {
        this.isHovererd = false
    }
}