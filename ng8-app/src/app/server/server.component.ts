import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles : [`
	p {
		color:red;
	}		
	`]
})

export class ServerComponent{
	serverId : number = 10;
	serverStatus : string = "Offline";
	getServerId(){
		return this.serverId;
	}
	getServerStatus(){
		return this.serverStatus;
	}


}