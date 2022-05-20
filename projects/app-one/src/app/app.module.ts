import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyLibraryModule } from 'projects/my-library/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
