import { Component, Input, AfterViewInit, ViewContainerRef, TemplateRef, ContentChild, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'AngularLifeCycle';
  LoadCustomers = false;

  NameGP: FormGroup;
  EName: FormControl;
  ENames: FormArray;

  ngOnInit() {
    this.NameGP = new FormGroup({
      'ENames': new FormArray([
        new FormGroup({
          'EName': new FormControl(null)
        })
      ])
    });
  }

  @Input('OrdersData') OrdersData;
  constructor() {
    console.log(this.OrdersData);
  }


  Orders: any = [{
    'CusName': "first",
    'ProName': "Product",
    "Comments": "comments has getting",
    "Orderdate": new Date(),
    "DeleveryDate": new Date()
  }];
  customerOrderDetails(details: any) {
    this.Orders.push(details);
    //Today date..
    this.Orders[this.Orders.length - 1]["Orderdate"] =
      new Date();
    //Adding 3 days..
    // this.Orders[this.Orders.length - 1]["DeleveryDate"] =
    //   new Date().setDate(new Date().getDate() + 3);

    console.log("Orders ", this.Orders);
  }

  evtEditDetails(index) {
    console.log("updated");
  }


  ordersData: any;
  evtOrdersData(ordersData) {
    this.ordersData = ordersData;
    console.log("afterview init", this.ordersData);

  }


  Products = [];

  productsLength = 0;
  Generate() {
    this.Products.push({ 'ProductName': 'Product' + this.Products.length });
    this.productsLength = this.Products.length;
  }

  Rows = [];
  rowIndex = "";
  @ViewChild('contentContainer', { read: ViewContainerRef })
  contentContainer: ViewContainerRef;
  @ViewChild('contentTemplate') contentTemplate: TemplateRef<any>;
  modLocation = "";
  evtAddRow() {
    //this.Rows.push(this.Rows.length);
    this.contentContainer.createEmbeddedView(this.contentTemplate);
  }





  employees = [];
  evtEmployeeGenerate() {
    this.NameGP = new FormGroup({
      'ENames': new FormArray([
        new FormGroup({
          'EName': new FormControl(null)
        })
      ])
    });
    this.employees.push({ 'employeesLength': this.employees.length });
    console.log("evt raised", this.employees.length);
  }

}
