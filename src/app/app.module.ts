import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableOfContentsComponent } from './table-of-contents/table-of-contents.component';
import { CounterComponent } from './counter/counter.component';
import { CssColorSelectComponent } from './css-color-select/css-color-select.component';


@NgModule({
  declarations: [
    AppComponent,
    TableOfContentsComponent,
    CounterComponent,
    CssColorSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
