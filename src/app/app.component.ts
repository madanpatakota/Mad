import { Component, OnInit } from '@angular/core';
import { LogsService } from './logs.service';
import { OrdersService } from './orders.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LogsService, OrdersService]
})
export class AppComponent implements OnInit {


  Customer = {};
  NewCustomer(data) {
    Object.assign(this.Customer,data);
  }

  constructor(private LoggerService: LogsService, private orderService: OrdersService) {
    //console.log("referecne from appcomponent " , this.LoggerService);
    // this.orderService.ProductsObservable.next("data");
    // this.orderService.ProductsObservable.subscribe((param) => {
    //   console.log("appcomponent fired");
    // });

  }

  ngOnInit() {
    this.orderService.ProductsObservable.subscribe((param) => {
      console.log("appcomponent fired");
    });
  }
  //title = 'AngularDemos';

}
