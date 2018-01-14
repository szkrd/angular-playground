import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssColorSelectComponent } from './css-color-select.component';

describe('CssColorSelectComponent', () => {
  let component: CssColorSelectComponent;
  let fixture: ComponentFixture<CssColorSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssColorSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssColorSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
