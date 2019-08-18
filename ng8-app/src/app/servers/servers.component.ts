import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // the most preferrable style for using selector property in components
  // selector: '[app-servers]', 
  // selector: '.app-servers',
  //template: `<app-server></app-server>
  //<hr>
  //<app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean = false;
  serverCreationStatus: string = 'No Server was Created!';
  serverName = ''; // default server will be "blank"
  userName = ''; 
  serverCreated:boolean = false; // default value should be false
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {

  }

  onCreateServer(){
    this.serverCreated = true; // setting serverCreated=true when the button is clicked 
    this.serverCreationStatus = 'Server was Created!. The server name is : ' + this.serverName;
  }

  onUpdateServerName(event: Event){
      console.log(event);
      this.serverName=(<HTMLInputElement>event.target).value;
  }

   onResetUser(event: Event){
     console.log(event);
     this.userName='';
   }

}
