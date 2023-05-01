import { Component } from '@angular/core';
//@Component is called as decorater ,Like as java annotation
@Component({
  selector: 'app-root',
  //Can also be determined as templete
  //template: '<h1>Hello World</h1>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JavaFullStack';
}
