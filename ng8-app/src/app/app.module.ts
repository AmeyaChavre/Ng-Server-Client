import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component'; // importing the servers component in root module
import { ClientComponent } from './client/client.component';
import { ClientsComponent } from './clients/clients.component';
import { PasscodeComponent } from './passcode/passcode.component'; // including client component

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    ClientComponent,
    ClientsComponent,
    PasscodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // bootstarping the AppComponent 
})
export class AppModule { }
