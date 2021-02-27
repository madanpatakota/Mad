import {
  Component, OnInit, OnChanges, OnDestroy,
  AfterContentChecked, AfterContentInit,
  AfterViewChecked,
  AfterViewInit, DoCheck,
  Output, EventEmitter, TemplateRef, ContentChild, ViewChild, ViewContainerRef, Input
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent
  implements OnInit,
  OnChanges, OnDestroy, AfterContentChecked, AfterContentInit, AfterViewChecked,
  AfterViewInit, DoCheck {


  // tslint:disable-next-line: no-inferrable-types
  @Input() clicks: number = 1;
  Init = this.clicks;
  Check = this.clicks;
  Changes = this.clicks;
  ViewChecked = this.clicks;
  ContentChecked = this.clicks;
  ContentInit = this.clicks;
  ViewInit = this.clicks;
  Destroy = this.clicks;

  modName = true;
  formGP: FormGroup;
  @ViewChild('Loccontainer', { read: ViewContainerRef }) Loccontainer: ViewContainerRef;
  @ViewChild('Loctemplate') Loctemplate: TemplateRef<any>;


  constructor() {
    this.formGP = new FormGroup({
      'ProductName': new FormControl(false),
      'LocationName': new FormControl("")
    });
    console.log("constructor has loaded");
  }


  ngOnInit() {

    console.log("----------------ngOnInit() Loaded times ------------", this.Init++);
    // console.log("----------------ngOnInit() Completed ------------");
  }

  ngDoCheck() {
    console.log("----------------ngDoCheck() Loaded times ------------", (this.Check++));
    // console.log("----------------ngDoCheck() Completed ------------");
    //this.Loccontainer.createEmbeddedView(this.Loctemplate);
    // setTimeout(() => {
    //   this.Loccontainer.createEmbeddedView(this.Loctemplate);
    // },2000);

    // setTimeout(() => {
    //   this.contentContainer.createEmbeddedView(this.contentTemplate);
    // }, 4000);
  }
  ngOnChanges() {
    //debugger;
    console.log("----------------ngOnChanages() Loaded times ------------", this.Changes++);
    //    console.log("----------------ngOnChanages() Completed ------------");
  }

  ngAfterViewChecked() {
    console.log("----------------ngAfterViewChecked() Loaded times ------------", this.ViewChecked++);
    //  console.log("----------------ngAfterViewChecked() Completed ------------");
    //this.Loccontainer.createEmbeddedView(this.Loctemplate);

  }
  ngAfterViewInit() {
    console.log("----------------ngAfterViewInit() Loaded  times ------------", this.ViewInit++);
    //console.log("----------------ngAfterViewInit() Completed ------------");
  }


  ngAfterContentChecked() {
    console.log("----------------ngAfterContentChecked() Loaded times ------------", this.ContentChecked++);
    //console.log("----------------ngAfterContentChecked() Completed ------------");

    setTimeout(() => {
      this.Loccontainer.createEmbeddedView(this.Loctemplate);
    },2000);
  }

  @ContentChild('contentContainer', { read: ViewContainerRef })
  contentContainer: ViewContainerRef;
  @ContentChild('contentTemplate') contentTemplate: TemplateRef<any>;

  //dynamicLoad = new Subject();
  ngAfterContentInit() {
    console.log("----------------ngAfterContentInit() Loaded  times ------------", this.ContentInit++);
    //    console.log("----------------ngAfterContentInit() Completed ------------"
    //this.Loccontainer.createEmbeddedView(this.Loctemplate);
    // setTimeout(() => {
    //   this.contentContainer.createEmbeddedView(this.contentTemplate);
    // }, 1000);

    // this.dynamicLoad.subscribe(()=>{
    //   this.contentContainer.createEmbeddedView(this.contentTemplate);
    // });
  }
  ngOnDestroy() {
    console.log("----------------ngOnDestroy() Loaded times ------------", this.Destroy++);
    //  console.log("----------------ngOnDestroy() Completed ------------");
  }


}
