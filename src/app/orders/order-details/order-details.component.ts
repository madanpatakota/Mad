import { Component, Input, AfterViewInit, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/orders.service';
import { LogsService } from 'src/app/logs.service';
import { CustomersComponent } from 'src/app/customers/customers.component';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
  providers: []  // remember this point.
})
export class OrderDetailsComponent implements OnInit {

  constructor(private OrderServcieInstanceChild: OrdersService, private Logsservice: LogsService) { }

  @Input() OrderCustomerName: string = undefined;

  ngOnInit() {
    this.OrderServcieInstanceChild.OrdersEmitter.subscribe((Orders) => {
      Orders.forEach(element => {
        this.OrderDetails.push(element);
      });
    });
  }

  CustomerName = "";
  OrderDetails = [];

  evtGetOrdersDetails(CustomerName) {
    this.OrderDetails =
      this.OrderServcieInstanceChild.getOrdersWithPrices(CustomerName);
    this.Logsservice.Logger(CustomerName);
  }


}
