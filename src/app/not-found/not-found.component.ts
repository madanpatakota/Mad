import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  information = "";
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((x: any) => {
      this.information = x[0];
    });
  }
}
