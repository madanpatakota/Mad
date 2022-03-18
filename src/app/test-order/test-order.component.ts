import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-test-order',
  templateUrl: './test-order.component.html',
  styleUrls: ['./test-order.component.css']
})
export class TestOrderComponent implements OnInit {

  constructor(private OrderServcieInstanceChild:OrdersService) {
    this.OrderServcieInstanceChild.OrdersEmitter.subscribe((Orders) => {
      Orders.forEach(element => {
        this.OrderDetails.push(element);
      });
      console.log(this.OrderDetails);
      console.log("Orders");
    });
    this.OrderServcieInstanceChild.OrderObservable.subscribe((Orders)=>{
       console.log("Orders");
    })

   }

  OrderDetails = [];

  
  
  ngOnInit(): void {
    this.OrderServcieInstanceChild.OrdersEmitter.subscribe((Orders) => {
      Orders.forEach(element => {
        this.OrderDetails.push(element);
      });
      console.log(this.OrderDetails);
    });
    this.OrderServcieInstanceChild.OrderObservable.subscribe((Orders)=>{
       console.log(Orders);
    })
  }

}
