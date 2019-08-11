import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component'; // importing the server component in root module


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent // registering the server component 
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // bootstarping the AppComponent 
})
export class AppModule { }
