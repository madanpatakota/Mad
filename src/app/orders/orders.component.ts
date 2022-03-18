import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef, AfterViewInit, ComponentRef, ComponentFactoryResolver, EventEmitter, Output } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  //providers: [ProductsService, OrdersService]
  providers: [OrdersService]
  // service is reading by angular , from here.
  // How ? because a component having the metadata i.e. providers.
})
export class OrdersComponent implements OnInit , AfterViewInit{

  //FullNamesOrders = [];
  //ProductsData = [];

  constructor(//private ProductServiceInstace: ProductsService,
    private OrderServcieInstanceParent: OrdersService) {
  }

  @ViewChild('container') container;
  @ViewChild('tempmlate') template;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //this.container.
  }

  CustomerName = '';
  Orders = [];

  evtGetOrders(CustomerName) {
    //Sends the Product Details to Order Service. So i can Get Prices Values.
    //Orders Service here for fetching unit Prices Details.
    this.Orders = 
    this.OrderServcieInstanceParent.getOrdersWithPrices(CustomerName);
  }

  @Output() evtAddCustomer = new EventEmitter<any>();
  AddCustomer() {
   const OrdersCount = this.OrderServcieInstanceParent.AddCustomer(this.evtAddCustomer);
    console.log("New Customer Mallesh has created");
    console.log("Now Orders Count is '"+OrdersCount+"' . Becuase i have created Mallesh");
  }
}
