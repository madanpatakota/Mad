import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ICustomer } from './icustomer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  CustomerObservable = new Observable();

  CustomerSuccessEmitter = new EventEmitter();



  //httpHeaders = new HttpHeaders({ "Technology": "Angular" });
  //httpParams = new HttpParams().set("userToken", "afaufawpieubipqawfio");

  getCustomers() {
    //this.httpParams = this.httpParams.append("CustomerID", "1");
    this.CustomerObservable = this.http.get("https://localhost:44309/api/customers")
      .pipe(tap((event: any) => {
        if (event.type === HttpEventType.Sent) {
          console.log("You are sending the request ", event.body);
        }
        if (event.type === HttpEventType.Response) {
          console.log("You are getting response ", event.body);
        }
      }));
    return this.CustomerObservable;
  }


  // tslint:disable-next-line: no-inferrable-types
  PostAPIURL: string = "https://localhost:44309/api/customers/NewCustomer";  // End point 
  CreateCustomer(Customer: ICustomer) {
    return this.http.post(this.PostAPIURL, Customer);
  }
  ModelPopupEmitter = new EventEmitter<any>();


  //xmlobj = "<?xml version= 1.0 ?> <employee> <id>1</id> </employee> '";
  //'application-xml'

  UpdateCustomer(updateCustomer: ICustomer) {
    let updateCustomer1 = [];
    const UpdateAPIURL = "https://localhost:44309/api/customers";
    return this.http.put(UpdateAPIURL + "/" + updateCustomer.CustomerID, updateCustomer1);

    // updatecustomer is object   application-json
  }


  DeleteCustomer(CustomerID) {
    const DeleteAPIURL = "https://localhost:44309/api/customers";
    return this.http.delete(DeleteAPIURL + "/" + CustomerID);
  }

}
