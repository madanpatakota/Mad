import { Component, OnInit } from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomerService } from 'src/app/customer.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  IsCreate = true;
  constructor(public activeModal: NgbActiveModal,
    private modalService: NgbModal, private customerservice: CustomerService,
    private toastrService: ToastrService) {
    this.customerservice.ModelPopupEmitter.subscribe((params) => {
      //console.log(params);
      this.IsCreate = false;
      const param = params.record;
      console.log("subscribe");
      this.customerForm.setValue({
        Address: param.Address,
        City: param.City,
        CompanyName: param.CompanyName,
        ContactName: param.ContactName,
        ContactTitle: param.ContactTitle,
        Country: param.Country,
        CustomerID: param.CustomerID,
        Fax: param.Fax,
        Phone: param.Phone,
        PostalCode: param.PostalCode,
        Region: param.Region
      });
    });
  }


  //customerForm: FormGroup;

  customerForm = new FormGroup({
    "CustomerID": new FormControl(),
    "CompanyName": new FormControl(),
    "ContactName": new FormControl(),
    "ContactTitle": new FormControl(),
    "Address": new FormControl(),
    "City": new FormControl(),
    "Region": new FormControl(),
    "PostalCode": new FormControl(),
    "Country": new FormControl(),
    "Phone": new FormControl(),
    "Fax": new FormControl()
  });

  ngOnInit(): void {
    console.log("loaded");
  }


  evtCreateCustomer(customerForm: FormGroup) {
    const Observable = this.customerservice.CreateCustomer(customerForm.value);
    // Logic is here for contact the service.
    Observable.subscribe((Response: any) => {
      this.activeModal.close();
      const status = "'" + Response.data + "' New Customer has added";
      this.toastrService.success(status);
      this.customerservice.CustomerSuccessEmitter.emit(customerForm.value);
      //console.log(Response);
    });
    // customerForm.value is Object here  
  }


  Status = "";
  evtUpdateCustomer(Customer) {
    // need to writh service instance.
    this.customerservice.UpdateCustomer(Customer.value).subscribe((Response) => {
      //console.log(Response);
      this.customerservice.CustomerSuccessEmitter.emit(Customer.value);
      this.Status = Customer.value?.CustomerID + " update Successfully";
      this.toastrService.success(this.Status);
      this.activeModal.close();
    },
      (error) => {
        // this.activeModal.close();
        // throw error;
      },
      () => {
        this.activeModal.close();
      });
  }

}
