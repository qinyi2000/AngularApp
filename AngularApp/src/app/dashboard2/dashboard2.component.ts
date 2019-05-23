import { Component, OnInit } from '@angular/core';
import { Link } from 'C:/AngularApp/AngularApp/src/app/model/link';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit {
  title: String;
  links: Link[] = [];

  constructor() {
    this.title = "AngularApp";
    this.links = [{url: "https://angular.io/tutorial", name: "Heroes"},
      { url: "https://angular.io/cli", name: "Documentation" },
      { url: "https://google.com", name: "Google it!"}
    ]
  }

  ngOnInit() {
    console.log("hello");
  }

}
