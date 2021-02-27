import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CustomersService } from '../customers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanDeactivateCustomersComponent } from '../can-de-activate.guard';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit , CanDeactivateCustomersComponent  {

  CurrentURL = '';
  constructor(private customerService: CustomersService,
    private activateRouter: ActivatedRoute, private router: Router) {

    this.CurrentURL = this.router.url;
    this.activateRouter.params.subscribe((param: any) => {
      console.log("from parent");
      console.log(param);
      // this.paramCustomerID = param;
    });
  }

  CustomersList = [];
  componentName = 'customer';

  //@ViewChild('customerteamplate') customer : TemplateRef<any>;
  ngOnInit(): void {
    this.CustomersList = this.customerService.getCustomers();
  }


  evtCustomer(CustomerID) {
    //this.router.navigate(["Customer"], { queryParams: { 'CustomerID': CustomerID }, 
    //relativeTo: this.activateRouter });

    console.log("madan");
    this.router.navigate(["Customer"], { fragment: CustomerID.toString(), relativeTo: this.activateRouter });

  }


  txtComments = null;
  
  canDeactivate():  boolean {
    if (this.txtComments) {
      return window.confirm("Do you want to discard changes?");
    }
    return true;
  }

  evtSave() {
    //this.txtCommentpageLoad = this.txtComment;
    //.......
    alert("Data Saved Successfully...");
  }

}
