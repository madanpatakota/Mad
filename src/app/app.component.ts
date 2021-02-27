import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomersService } from './customers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngualrRoutes';

  constructor(private router: Router, private activaterouter: ActivatedRoute) { }

  updates = "";
  ngOnInit() {
    this.activaterouter.data.subscribe(param => {
      this.updates = param.comments;
    });
  }

}
