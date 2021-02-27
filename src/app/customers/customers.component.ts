import {
  Component, OnInit, OnChanges, OnDestroy,
  AfterContentChecked, AfterContentInit,
  AfterViewChecked,
  AfterViewInit, DoCheck, Output, EventEmitter, TemplateRef, ContentChild, ViewChild, ViewContainerRef, Input
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Template } from '@angular/compiler/src/render3/r3_ast';
//import { EventEmitter } from 'protractor';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit,
  OnChanges, OnDestroy, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck {
  // tslint:disable-next-line: no-output-rename
  
  @Input('OrderInputs') OrderInputs;
  @Output() orderDetails = new EventEmitter();

  @ContentChild('contentOrderDetails')
  contentOrderDetails: TemplateRef<any>;
  @ViewChild('ProductsView')
  ProductsView: TemplateRef<any>;
  @ViewChild('headerTemplate')
  headerTemplate: TemplateRef<any>;

  @ViewChild('orderContentContainer', { read: ViewContainerRef })
  orderContentContainer: ViewContainerRef;

  @ViewChild('headerContainer', { read: ViewContainerRef })
  headerContainer: ViewContainerRef;


  @ContentChild('infoCustomerTemplate', { read: TemplateRef })
  infoCustomerTemplate: TemplateRef<any>;

  @ContentChild('infoCustomersContainer', { read: ViewContainerRef })
  infoCustomersContainer: ViewContainerRef;



  constructor() {
    //this.orderDetails1.emit({'firstname':"1"});
  }

  customerForm: FormGroup;
  ngOnInit() {
    this.customerForm = new FormGroup(
      {
        'CusName': new FormControl(null),
        'ProName': new FormControl(null),
        'Comments': new FormControl(null)
      }
    );


    // console.log("----------------ngOnInit() Loaded ------------");
    // console.log("----------------ngOnInit() Completed ------------");
  }
  ngDoCheck() {
    // console.log("----------------ngDoCheck() Loaded ------------");
    // console.log("----------------ngDoCheck() Completed ------------");
  }
  ngOnChanges() {
    console.log("----------------ngOnChanages() Loaded ------------");
    console.log("----------------ngOnChanages() Completed ------------");
  }

  ngAfterViewChecked() {
    console.log("----------------ngAfterViewChecked() Loaded ------------");
    //  console.log("----------------ngAfterViewChecked() Completed ------------");
  }
  ngAfterViewInit() {
    console.log("----------------ngAfterViewInit() Loaded ------------");
    //console.log("----------------ngAfterViewInit() Completed ------------");
    this.headerContainer.createEmbeddedView(this.headerTemplate);
    this.infoCustomersContainer.createEmbeddedView(this.infoCustomerTemplate);
    console.log("Under after View init" , this.OrderInputs);

  }

  ngOnDestroy() {
    console.log("----------------ngOnDestroy() Loaded ------------");
    console.log("----------------ngOnDestroy() Completed ------------");
  }
  ngAfterContentChecked() {
    console.log("----------------ngAfterContentChecked() Loaded ------------");
    //console.log("----------------ngAfterContentChecked() Completed ------------");
   // this.infoCustomersContainer.createEmbeddedView(this.infoCustomerTemplate);

  }
  ngAfterContentInit() {
    console.log("----------------ngAfterContentInit() Loaded ------------");
    console.log("----------------ngAfterContentInit() Completed ------------");

    console.log("Under aftercontentinit" , this.OrderInputs);
    //console.log(this.infoCustomerTemplate.elementRef);
    //this.infoCustomersContainer.createEmbeddedView(this.infoCustomerTemplate);
    //debugger;
  }

  // tslint:disable-next-line: no-output-rename
  evtClick() {
    //EventEmitter should be inject from angular core but not protoctor
    const CusName = this.customerForm.get('CusName').value;
    const ProName = this.customerForm.get('ProName').value;
    const Comments = this.customerForm.get('Comments').value;
    //You have to give 0 or 1 argument to here .. because eventemitter() having no params
    this.orderDetails.emit({ CusName, ProName, Comments });
    alert("Order created");
  }

  evtContentCreate(){
    this.infoCustomersContainer.createEmbeddedView(this.infoCustomerTemplate);
  }
}
