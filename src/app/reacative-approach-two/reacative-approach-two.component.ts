

import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reacative-approach-two',
  templateUrl: './reacative-approach-two.component.html',
  styleUrls: ['./reacative-approach-two.component.css']
})
export class ReacativeApproachTwoComponent implements OnInit {

  constructor() { }

  userForm: FormGroup;

  //YOu can't write the formcontrol directly into the formarray
  //first need to add in the formgroup and then formarray.

  ngOnInit(): void {
    this.userForm = new FormGroup({
      'userDetails': new FormArray([
        new FormGroup({
          'userName': new FormControl(null, Validators.required),
          'email': new FormControl(null, [Validators.required, Validators.email]),
        })
      ])
    });

    //
    // this.userForm = new FormGroup({
    //   'userDetails': new FormArray([
    //     new FormGroup({
    //       'customFormGroup' : new FormGroup({
    //         'TestName' : new FormControl()
    //       })
    //     })
    //   ])
    // });

    // this.userForm = new FormGroup({
    //   'userD' : new FormArray([])
    // });
    console.log(this.userForm);
  }

  evtSubmit() {
    console.log("submitting data", this.userForm);
  }

  evtRowAdd(index) {

    // tslint:disable-next-line: whitespace
    let controls = this.userForm.get('userDetails') as FormArray;
    if (index == controls.length - 1) {
      controls.push
        (new FormGroup(
          {
            'userName': new FormControl(null, Validators.required),
            'email': new FormControl(null, [Validators.required, Validators.email])
          }
        ));
    }
  }


  evtAdd() {

    // tslint:disable-next-line: whitespace
    let controls = this.userForm.get('userDetails') as FormArray;
    controls.push
      (new FormGroup(
        {
          'userName': new FormControl(null, Validators.required),
          'email': new FormControl(null, [Validators.required, Validators.email])
        }
      ));
  }


  evtRemove(index) {
    //Remove the formGroup
    (this.userForm.get('userDetails') as FormArray).removeAt(index);
  }

  evtReset(item: FormGroup) {

    let DuplicateItem: FormGroup;
    DuplicateItem = Object.assign({}, item);
    console.log("before reset ", DuplicateItem);

    item.get('userName').reset();
    item.get('email').reset();
    // (<FormArray>this.userForm.get('userDetails')).controls.forEach(formGroup => {
    //   formGroup.get('userName').reset();
    // });
    // (<FormArray>this.userForm.get('userDetails')).controls.forEach(formGroup => {
    //   formGroup.get('email').reset();
    // });
    //});
    //(item.controls as Array<FormControl>).forEach(formcontrol => { formcontrol.reset(); });
    console.log("After reset ", item);

  }



}





