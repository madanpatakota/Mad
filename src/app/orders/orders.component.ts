import { Component, OnInit, Output ,EventEmitter } from '@angular/core';
//import {  } from 'protractor';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  // tslint:disable-next-line: no-output-rename
  @Output('Orders') Orders = new EventEmitter();
  orderName = "";
  constructor() { }

  ngOnInit(): void {
  }
  evtOrdersSubmit() {
    this.Orders.emit(this.orderName);
  }
}
