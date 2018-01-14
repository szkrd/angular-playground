import { Component, OnInit } from '@angular/core';
import {Link} from './link';

@Component({
  selector: 'app-table-of-contents',
  templateUrl: './table-of-contents.component.html',
  styleUrls: ['./table-of-contents.component.css']
})
export class TableOfContentsComponent implements OnInit {
  links: Link[] = [
    { url: 'https://angular-2-training-book.rangle.io/', title: 'a2 training book' },
    { url: 'https://angular.io/tutorial', title: 'Tour of Heroes' },
    { url: 'https://github.com/angular/angular-cli/wiki', title: 'CLI Documentation' },
    { url: 'https://blog.angular.io/', title: 'Angular blog' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
