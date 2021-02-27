import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from '../customer.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateCustomerComponent } from './create-customer/create-customer.component';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit, OnDestroy {

  constructor(private http: HttpClient, private customerService: CustomerService,
    private modalService: NgbModal) { }

  //CustomersList = [];

  //subscription: Subscription;
  ngOnInit(): void {
    // this.subscription = this.customerService.getCustomers().
    //   subscribe((Response: any) => {
    //     //console.log(Response.data);
    //     this.CustomersList = Response.data;
    //   });
  }

  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }

  openComponent() {
    this.modalService.open(CreateCustomerComponent, {
      ariaLabelledBy: 'modal-basic-title',
      backdropClass: 'light-blue-backdrop',
      windowClass: 'dark-modal',
      size: 'lg' //sm , xl,
      //centered:true,
      //scrollable : true
    });
  }




}
