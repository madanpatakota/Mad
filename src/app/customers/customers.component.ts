import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { LogsService } from '../logs.service';
import { OrdersService } from '../orders.service';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers: [ProductsService, LogsService, OrdersService]
})
export class CustomersComponent implements OnInit , AfterViewInit {

  @Input() NewCustomer: {} = {};
  //ProuctsServiceInstance = null;
  ProductsObservable = new Subject();
  constructor(private ProuctsServiceInstance: ProductsService,
    private _logservice: LogsService, private OrderService: OrdersService) {
    //this.ProuctsServiceInstance = new ProductsService();
    console.log("reference form csutoemrs ", this._logservice);
    // this.ProductsObservable.subscribe((param) => {
    //   this.Products.push(param);
    // });
    // this.OrderService.ProductsObservable.subscribe((param) => {
    // console.log("fired");
    // });
    // this.ProductsObservable = this.OrderService.ProductsObservable;

    //this.Products.push(this.Customer);
  }

  ngAfterViewInit(){
    this.Products.push(this.NewCustomer);
  }

  CustomerName = '';
  Products = [];

  ngOnInit(): void {
    this.Products = this.ProuctsServiceInstance.ProductsData;

    this.ProductsObservable.subscribe((param) => {
      this.Products.push(param);
    });
  }

  evtGetData(CustomerName) {
    this.Products = this.ProuctsServiceInstance.GetProductsByCustomerName(CustomerName);
    this._logservice.Logger("from Cusomers '" + CustomerName + "'");
  }

}
