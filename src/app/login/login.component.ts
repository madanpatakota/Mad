import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  CustomerID = null;
  constructor(private router: Router , private activaterouter :ActivatedRoute
) {
  }

  LoginFormSubmit() {
    this.router.navigate(['Customers',this.CustomerID]);
  }

  updates = "";
  ngOnInit(): void {
    this.activaterouter.data.subscribe(param => {
      console.log(param.comments);
      this.updates = param.comments;
    });

  }

}
