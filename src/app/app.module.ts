import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatFormFieldModule, MatInputModule, MatAutocompleteModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WosNextgenTypeaheadService } from './wos-nextgen-typeahead-service';

import { HttpClientModule } from '@angular/common/http';

const modules = [
 MatFormFieldModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ...modules
  ],
  exports: [
      ...modules
    ],
  providers: [WosNextgenTypeaheadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
