import { ProductsService } from './products.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';



@Injectable()
//-- Productservice here 
//Telling to the angular you can inject the any kind of service which can designed by the typescript class
export class OrdersService {

  FullNames = [];
  OrdersData = [];

  constructor(private ProductServiceInstace: ProductsService) {
    this.OrdersData = [{
      OrderID: "xy001", Quantity: 4, UnitPrice: "300Rs",
      CompanyName: "Specialty Biscuits, Ltd.", ContactPerson: "Regina Murphy"
    },
    {
      OrderID: "xy002", Quantity: 2, UnitPrice: "150Rs",
      CompanyName: "CKY Ltd.", ContactPerson: "Mahamood"
    },
    {
      OrderID: "xy003", Quantity: 7, UnitPrice: "400Rs",
      CompanyName: "CCSY Ltd.", ContactPerson: "Alexa"
    },
    {
      OrderID: "xy004", Quantity: 4, UnitPrice: "350Rs",
      CompanyName: "Udipi Restarent", ContactPerson: "Imran"
    },
    {
      OrderID: "xy005", Quantity: 5, UnitPrice: "450Rs",
      CompanyName: "CDK Company Ltd.", ContactPerson: "Alexa"
    },
    {
      OrderID: "xy006", Quantity: 7, UnitPrice: "290Rs",
      CompanyName: "Cakes Company Ltd.", ContactPerson: "Peter Wilson"
    },
    {
      OrderID: "xy007", Quantity: 10, UnitPrice: "320Rs",
      CompanyName: "Chips Company Ltd.",
      ContactPerson: "Alexa"
    }];

    console.log("Orders Data Count ", this.OrdersData.length);
    //this.FullNames = ["Madan Mohan Reddy", " Suresh Kumar Reddy", "Sudheer Reddy"];
  }
  //constructor() { }
  //http Service


  ProductsData = [];

  OrdersEmitter = new EventEmitter<any>();

  getOrdersWithPrices(CustomerName) {
    // Iam using Productservice into Order Service.....
    this.ProductsData = this.ProductServiceInstace.GetProductsByCustomerName(CustomerName);

    const OrdersFilterData = [];
    this.ProductsData.forEach((productelement) => {
      const OrdersData: any = this.OrdersData.find((elementOrder) => {
        return elementOrder.OrderID === productelement.OrderID;
      });
      OrdersData.CustomerName = productelement.CustomerName;
      OrdersData.ProductName = productelement.ProductName;
      OrdersFilterData.push(OrdersData);
    });
    this.OrdersEmitter.emit(OrdersFilterData);
    return OrdersFilterData;
  }

  //ProductsEmitter = new EventEmitter<any>();

  ProductsObservable = new Subject();

  AddCustomer(evtAddCustomer?) {
    const newCustomer = {
      CustomerName: "Mallesh", ProductName: "Biscuits", OrderID: "xy008"
    };

    this.ProductServiceInstace.ProductsData.push(newCustomer);
    //this.ProductsObservable.next(newCustomer);

    evtAddCustomer.emit(newCustomer);

    this.OrdersData.push({
      OrderID: "xy008", Quantity: 15, UnitPrice: "500Rs",
      CompanyName: "Specialty Biscuits, Ltd",
      ContactPerson: "Regina Murphy"
    });
    return this.OrdersData.length;
  }


}
