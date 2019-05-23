import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit {
  title: String;
  constructor() {
    this.title = "AngularApp";}

  ngOnInit() {
    console.log("hello");


  }

}
