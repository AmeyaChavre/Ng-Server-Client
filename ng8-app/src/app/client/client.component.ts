import { Component } from '@angular/core';

@Component({
	selector: 'app-client',
	templateUrl: './client.component.html',
	styles: [
	`
	p {
		color:green;
	}		
	`
	]
})
/*Client Component appears in green*/
export class ClientComponent{
 clientId : number = 10;
 clientLocation : string = "US";
 clientStatus : string = "online";
}