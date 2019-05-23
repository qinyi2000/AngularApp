import { Component, OnInit } from '@angular/core';
import { Link } from 'C:/AngularApp/AngularApp/src/app/model/link';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit {
  title: String;
  links: Link[] = [];

  constructor(private ActivatedRoute: ActivatedRoute, private router: Router) {
    this.title = "AngularApp";
    this.links = [{url: "https://angular.io/tutorial", name: "Heroes"},
      { url: "https://angular.io/cli", name: "Documentation" },
      { url: "https://google.com", name: "Google it!"}
    ]
  }

  ngOnInit() {
  }

  navigateToLogin() {
    this.router.navigate(['/login'], { relativeTo: this.ActivatedRoute });
  }
}
