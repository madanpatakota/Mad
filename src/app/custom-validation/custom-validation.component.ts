import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl, FormArray, NgForm, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-custom-validation',
  templateUrl: './custom-validation.component.html',
  styleUrls: ['./custom-validation.component.css']
})
export class CustomValidationComponent implements OnInit {
  // tslint:disable-next-line: member-ordering
  // tslint:disable-next-line: no-trailing-whitespace
  // tslint:disable-next-line: typedef-whitespace
  // tslint:disable-next-line: one-line
  // tslint:disable-next-line: whitespace
  // tslint:disable-next-line: member-ordering
  // tslint:disable-next-line: whitespace

  constructor() { }

  @ViewChild('vForm') vForm: NgForm;

  CustomValidationGroup: FormGroup;
  fb: FormBuilder;
  ngOnInit(): void {
    this.CustomValidationGroup = new FormGroup(
      {
        'txtName': new FormControl(null, [Validators.required, Validators.maxLength(15), Validators.email]),
        'CustomFormArray': new FormArray([])
      });
  }

  AddName(ArrayControls?: any) {
    const Custromcontrol = new FormControl(null);
    // (this.CustomValidation.get('CustomControl').controls as FormArray).push(Custromcontrol);
    // tslint:disable-next-line: no-unused-expression
    // this.CustomValidation.get('CustomControl').push(Custromcontrol) as FormArray;
    const FormArrays = (this.CustomValidationGroup.get('CustomFormArray') as FormArray);
    FormArrays.push(Custromcontrol);
    // console.log(ArrayControls.length);
    // console.log(OutPut);

  }

  // txtName() {
  //   //return this.CustomValidationGroup.get('txtName');
  // }

  // value changes
  // async
  // status changes
  // formarray
  // Customvalidation

}
