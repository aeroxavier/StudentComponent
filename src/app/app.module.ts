import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputEntryComponent } from './input-entry/input-entry.component';
import { AddEntryComponent } from './add-entry/add-entry.component';
import { ListEntryComponent } from './list-entry/list-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    InputEntryComponent,
    AddEntryComponent,
    ListEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
