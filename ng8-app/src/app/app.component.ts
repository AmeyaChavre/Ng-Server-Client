import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'] 
  /*
  Below we are using inline styles , both styleUrls and styles arrays cannot be present in the same component 
  */
  styles: [`
h3 {
	color:red; 
}
  `]
})
export class AppComponent {
  title = 'ng8-app';
}
