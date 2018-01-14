import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ColorNames} from './color-names.enum';

@Component({
  selector: 'app-css-color-select',
  templateUrl: './css-color-select.component.html',
  styleUrls: ['./css-color-select.component.css']
})
export class CssColorSelectComponent implements OnInit, OnChanges {
  // an observable is encapsulated on creation, but a subject
  // still "remains open" and may be set from external sources
  // behaviorsubject is a subject with an initial value
  // EDIT: it's probably an overkill or a bad concept here, sry
  // private selectedColor: BehaviorSubject<string>;

  private _selectedColor = '';

  @Input('color') defaultSelectedColor = '';

  // simple "change" would collide with the html event
  @Output('color-change') selectedColorEmitter = new EventEmitter<string>();

  colors = [
    'navy',
    'blue',
    'aqua',
    'teal',
    'olive',
    'green',
    'lime',
    'yellow',
    'orange',
    'red',
    'maroon',
    'fuchsia',
    'purple',
    'black',
    'gray',
    'silver'
  ];

  constructor() {
    // this.selectedColor = new BehaviorSubject<string>('');
    // this.selectedColor = '';
  }

  // set selectedColor (value) {
  //   if (this.selectedColor === undefined) {
  //     this.selectedColor = new Subject<string>();
  //   }
  //   this.selectedColor.next(value);
  // }

  get selectedColor () {
    // it's okay, but with an array + filter this would be a new instance!
    return this._selectedColor;
  }
  set selectedColor (value) {
    this._selectedColor = value;
    this.selectedColorEmitter.emit(value);
  }

  ngOnInit() {}

  // detects incoming change from parent, but happens BEFORE ngOnInit
  ngOnChanges(changes) {
    if (changes.defaultSelectedColor) {
      this.selectedColor = changes.defaultSelectedColor.currentValue;
    }
  }

}
