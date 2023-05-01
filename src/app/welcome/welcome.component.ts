import { Component, OnInit } from '@angular/core';

//importing app component 

import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message  ="Welcome java"
  name = ''
  constructor(private routes:ActivatedRoute) { }
  //ngOnInit with void will not return 
  ngOnInit(): void {
    console.log(this.message);
    //get value from param
    //console.log(this.routes.snapshot.params['name']);
    this.name=this.routes.snapshot.params['name'];
  }

}
