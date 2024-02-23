import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mycrudproject';

  
  numbers= [];
  constructor(){
    for( let i=0; i < 1000; i++){
      this.numbers.push(i);
    }
  }
}
