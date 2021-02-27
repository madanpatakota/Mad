import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef, Input, AfterViewInit, AfterContentInit, ContentChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, AfterContentInit, AfterViewInit {

  constructor() {
    console.log("Employee constructor loaded");
  }

  @Input('Employee') Employee = {};

  NameGP: FormGroup;
  index = 0;

  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;
  @ViewChild('formTemplate') formTemplate: TemplateRef<any>;


  EmployeeForm: FormGroup;
  ngOnInit(): void {
    this.EmployeeForm = new FormGroup({
      'Location': new FormControl(null),
      'Orders': new FormArray([new FormGroup({
        'Order': new FormControl(null)
      })])
    });
    console.log("Employee OnInit");
  }

  // tslint:disable-next-line: member-ordering
  //@ContentChild(TemplateRef) content: TemplateRef<any>;
  @ContentChild('content', { read: TemplateRef }) content: TemplateRef<any>;
  
  @ViewChild('VContent', { read: ViewContainerRef }) VContent: ViewContainerRef;

  ngAfterContentInit() {
  }

  ngAfterViewInit() {
    //ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value for 'ng-untouched': 'undefined'. 
    //Current value: 'false'. It seems like the view has been created after its parent and its children have been dirty checked
    setTimeout(() => {
      this.VContent.createEmbeddedView(this.content);
    }, 1000);
  }


  evtGenerateViewContent() {
    const controls = this.EmployeeForm.get('Orders') as FormArray;
    controls.push
      (new FormGroup(
        {
          'Order': new FormControl(null)
        }
      ));
  }

}
