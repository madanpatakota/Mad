import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-global-error',
  templateUrl: './global-error.component.html',
  styleUrls: ['./global-error.component.css']
})
export class GlobalErrorComponent implements OnInit {

  constructor(private router: Router, private activerouter: ActivatedRoute) { }

  ErrorMessage = "";
  ngOnInit(): void {
    this.activerouter.queryParams.subscribe((params) => {
      this.ErrorMessage = params.Message;
    });
  }

  evtBack() {
    this.router.navigate(["customer"]);
  }

}
