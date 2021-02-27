import { Component, OnInit, AfterViewInit, ContentChild, ViewContainerRef, TemplateRef, AfterContentInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements AfterContentInit, AfterViewInit {

 

  employees = [];
  empFormGroup: FormGroup = new FormGroup({
    'ENames': new FormArray([
      new FormGroup({
        'EName': new FormControl(null)
      })
    ])
  });
  constructor() {
    this.employees = [{
      NameGP: this.empFormGroup, 'employeeComp': 0
    }];
    console.log("constrctor Loaded");
  }

  @ViewChild(EmployeeComponent) EmployeeComponent: EmployeeComponent;
  ngAfterViewInit() {
    console.log(this.EmployeeComponent);
  }
  
  // Wnenever you are creating new do't take exisggincce this ....
  evtEmployeeGenerate() {
    this.employees.push({
      'NameGP': new FormGroup({
        'ENames': new FormArray([
          new FormGroup({
            'EName': new FormControl(null)
          })
        ])
      }), 'employeeComp': this.employees.length
    });
  }


  ngAfterContentInit() {
    // setTimeout(() => {
    //   this.container.createEmbeddedView(this.formTemplate);
    // }, 1000);
    // console.log("afterview Content init is intilized");
  }

  evtClick(employeeIndex) {
    const controls = this.employees[employeeIndex].NameGP.get('ENames') as FormArray;
    controls.push
      (new FormGroup(
        {
          'EName': new FormControl(null)
        }
      ));
  }
}
