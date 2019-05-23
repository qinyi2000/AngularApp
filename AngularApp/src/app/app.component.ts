import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  time: Date;
  constructor(private ActivatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

}
