import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CustomerService } from 'src/app/customer.service';
import { Subscription, Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateCustomerComponent } from '../create-customer/create-customer.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-get-customers',
  templateUrl: './get-customers.component.html',
  styleUrls: ['./get-customers.component.css']

})
export class GetCustomersComponent implements OnInit {

  constructor(private http: HttpClient, private customerService: CustomerService
    , private modalService: NgbModal, private toastrService: ToastrService,
    public activeModal: NgbActiveModal) {

    this.customerService.CustomerSuccessEmitter.subscribe((element) => {
      //this.CustomersList.push(element);
      const record = this.CustomersList.find((ele, index) => {
        if (element.CustomerID.trim() === ele.CustomerID.trim()) {
          this.CustomersList[index] = element;
          return element;
        }
      });  // udpate 
      if (!record) {
        this.CustomersList.push(element); // create
      }

    });
  }

  CustomersList = [];

  subscription: Subscription;
  ngOnInit(): void {
    this.subscription = this.customerService.getCustomers().
      subscribe((Response: any) => {
        console.log("Response is ", Response);
        this.CustomersList = Response.data;   //body...
      }, (error: HttpErrorResponse) => {
        if (error.status === 404) {
          console.log("API is undefined");
          throw error;
        }
      });
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }


  evtUpdate(record, status) {
    const modalRef = this.modalService.open(CreateCustomerComponent, {
      ariaLabelledBy: 'modal-basic-title',
      backdropClass: 'light-blue-backdrop',
      windowClass: 'dark-modal',
      size: 'lg' //sm , xl,
      //centered:true,
      //scrollable : true
    });

    this.customerService.ModelPopupEmitter.emit({ record, status });
  }

  CustomerID = null;
  index = -1;

  evtDelete(CustomerID, $index, confirmationTemplate) {
    this.modalService.open(confirmationTemplate,
      {
        ariaLabelledBy: 'modal-basic-title',
        backdropClass: 'light-blue-backdrop',
        windowClass: 'dark-modal',
        centered: true,
        size: 'md'
      });
    this.CustomerID = CustomerID;
    this.index = $index;
  }

  confirm() {
    this.customerService.DeleteCustomer(this.CustomerID).subscribe((Response) => {
      this.toastrService.success("Record deleted Successfully");
    });
  }
}
