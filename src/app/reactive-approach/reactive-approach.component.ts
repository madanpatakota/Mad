import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-approach',
  templateUrl: './reactive-approach.component.html',
  styleUrls: ['./reactive-approach.component.css']
})
export class ReactiveApproachComponent implements OnInit {
  userForm: FormGroup;
  constructor() {
  }
  
  CityList =
  [
    {
      Id: 1, Name: "Hyderabad"
    },
    {
      Id: 2, Name: "Bengolore"
    },
    {
      Id: 3, Name: "Chennai"
    }];

  ngOnInit(): void {
    this.userForm = new FormGroup({
      'nUserFormGroup' : new FormGroup({
        'fUserName': new FormControl(null, Validators.required),
        'fEmail': new FormControl(null, [Validators.required,
        Validators.email,
        Validators.minLength(10),
        Validators.maxLength(15)])
      }),
     'fCity' : new FormControl(null,Validators.required)
    });
    console.log("form intilization", this.userForm);
  }

  controlsfEmail=false;
  evtSubmit(){
   //Dynamically add the invalid and touched...
    this.controlsfEmail = this.userForm.controls['nUserFormGroup'].get('fUserName').invalid;
    this.userForm.controls['nUserFormGroup'].get('fUserName').markAsTouched();
   
    
   
    console.log("submitting data" , this.userForm);
  }

}
