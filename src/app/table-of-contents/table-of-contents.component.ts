import {AfterContentInit, Component, ElementRef, OnInit} from '@angular/core';
import {Link} from './link';

@Component({
  selector: 'app-table-of-contents',
  templateUrl: './table-of-contents.component.html',
  styleUrls: ['./table-of-contents.component.css']
})
export class TableOfContentsComponent implements OnInit, AfterContentInit {
  el: HTMLElement;

  links: Link[] = [
    { url: 'https://angular-2-training-book.rangle.io/', title: 'a2 training book' },
    { url: 'https://angular.io/tutorial', title: 'Tour of Heroes' },
    { url: 'https://github.com/angular/angular-cli/wiki', title: 'CLI Documentation' },
    { url: 'https://blog.angular.io/', title: 'Angular blog' }
  ];

  constructor(
    private elementRef: ElementRef
  ) {
    this.el = elementRef.nativeElement;
  }

  ngOnInit() {
  }

  // this is how you access and modify the dom (but you would do that in a directive I hope)
  ngAfterContentInit () {
    this.el.querySelector('pre.code').innerHTML = '<b>html injected</b>';
  }

}
