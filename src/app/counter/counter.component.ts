import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count = 0;

  constructor() { }

  // hackish way of a computed, terrible performance (runs on every render)
  // probably rx is the way to go?
  get percent () {
    if (this.count < 0) {
      return 0;
    } else if (this.count > 100) {
      return 100;
    } else {
      return this.count;
    }
  }

  ngOnInit() {
  }

  onIncClick () {
    this.count++;
  }

  onDecClick () {
    this.count--;
  }

}
