import {Directive, ElementRef, HostListener, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[appInputFilter]'
})
export class InputFilterDirective implements OnChanges {
  el: HTMLElement;
  rex: RegExp;

  @Input() filterPattern;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
    // nice try, but the input reference is not yet available in the constructor
    // this.rex = new RegExp(this.filterPattern);
  }

  // for fuck's sake, isn't it obvious that I need the $event payload?
  @HostListener('keydown', ['$event']) onKeyDown (e) {
    const char = e.key;
    const isLetter = char.length === 1;
    if (e.altKey || e.ctrlKey || e.metaKey || !isLetter) {
      return;
    }
    if (!this.rex.test(char)) {
      e.preventDefault();
    }
  }

  // try to deal with copy-paste or text drag and drop
  @HostListener('input', ['$event']) onInput (e) {
    const val = e.target.value;
    const filtered = val.split('').filter(char => this.rex.test(char)).join('');
    if (filtered !== val) {
      e.target.value = filtered;
    }
  }

  ngOnChanges (changes) {
    if (changes.filterPattern) {
      this.rex = new RegExp(changes.filterPattern.currentValue);
    }
  }
}
