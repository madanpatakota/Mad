import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from 'src/app/customers.service';
import { CanDeActivateGuard } from 'src/app/can-de-activate.guard';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private customerService: CustomersService) {

  }

  paramCustomerID = 0;
  CustomerData: any = {};


  ngOnInit(): void {
    //this.paramCustomerID = this.activatedRoute.snapshot.params["CustomerID"];
    console.log("fist time");

    this.activatedRoute.data.subscribe(param => {
      console.log(param.comments);
      //debuuger;
      //this.updates = param[0];
    });


    //this.paramCustomerID = this.activatedRoute.snapshot.queryParams["CustomerID"];
    //this.paramCustomerID = this.activatedRoute.snapshot.Params["CustomerID"];

    //console.log(this.activatedRoute.snapshot);


    this.paramCustomerID = +this.activatedRoute.snapshot.fragment;


    // this.activatedRoute.params.subscribe(param => {
    // this.paramCustomerID = param["CustomerID"];
    // this.CustomerData = this.customerService.getCustomers().filter((params: any) => {
    // console.log(params);
    // return params["ID"] === +this.paramCustomerID;
    // })[0];
    // })

    // this.activatedRoute.queryParams.subscribe(param => {
    //   this.paramCustomerID = param["CustomerID"];
    //   this.CustomerData = this.customerService.getCustomers().filter((params: any) => {
    //     console.log(params);
    //     return params["ID"] === +this.paramCustomerID;
    //   })[0];
    // })

    this.activatedRoute.fragment.subscribe(param => {
      this.paramCustomerID = +param;
      this.CustomerData = this.customerService.getCustomers().filter((params: any) => {
        console.log(params);
        return params["ID"] === +this.paramCustomerID;
      })[0];
    })


    this.CustomerData = this.customerService.getCustomers().filter((params: any) => {
      console.log(params);
      return params["ID"] === +this.paramCustomerID;
    })[0];
  }


  













}
