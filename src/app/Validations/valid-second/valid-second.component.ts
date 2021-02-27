import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-valid-second',
  templateUrl: './valid-second.component.html',
  styleUrls: ['./valid-second.component.css']
})
export class ValidSecondComponent implements OnInit {

  constructor() { }
  userForm: FormGroup;
  //unamePattern = "^[a-z0-9_-]{8,15}$";
  //pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  //emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  ngOnInit(): void {
    this.userForm = new FormGroup({
      'userPhone': new FormControl(null,
        [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]
      )
    })
  }

  evtSubmit() {
    console.log(this.userForm);
  }


}
