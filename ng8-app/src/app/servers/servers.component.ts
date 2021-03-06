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
  serverName = 'Testserver'; // default server will be "Testserver"
  userName = ''; 
  serverCreated:boolean = false; // default value should be false
  servers = []; // a place to store servers created
  passcodeReveal:boolean = false; // default value should be false
  log=[]; // a place to log the number of times Toggle Button was Clicked
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true; 
    },2000);
  }

  ngOnInit() {

  }

  onCreateServer(){
    this.serverCreated = true; // setting serverCreated=true when the button is clicked 
    this.servers.push(this.serverName); // pushing the newly created servers in the array "servers"
    this.serverCreationStatus = 'Server was Created!. The server name is : ' + this.serverName;
  }

  onDeleteServer(){
    this.serverCreated = false; // setting serverCreated=true when the button is clicked 
    this.servers.pop(); // poping the newly created servers in the array "servers"
    this.serverCreationStatus = 'Server was Deleted!. The server name is : ' + this.serverName;
  }

  onUpdateServerName(event: Event){
      console.log(event);
      this.serverName=(<HTMLInputElement>event.target).value;
  }

   onResetUser(event: Event){
     console.log(event);
     this.userName='';
   }

   passcodeGenerator(){
      this.passcodeReveal = !this.passcodeReveal;
      //this.log.push(this.log.length + 1);
      this.log.push(new Date());
   }

}
