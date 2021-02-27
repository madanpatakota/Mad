import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-valid-first',
  templateUrl: './valid-first.component.html',
  styleUrls: ['./valid-first.component.css']
})
export class ValidFirstComponent implements OnInit {

  constructor() { }
  userForm: FormGroup;
  ngOnInit(): void {
    this.userForm = new FormGroup({
      'userEmail': new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.minLength(12),
        Validators.maxLength(18),
        this.AvoidSpecialCases, this.EmailDomain
      ])
    });
  }

  evtSubmit() {
    console.log(this.userForm);
  }


  AvoidSpecialCases(control: FormControl): { [key: string]: boolean | null } {
    console.log("control is Executed", control);
    let EmailValue: string = control.value;
    let IsNotValidChar: boolean = null;
    if (EmailValue !== null) {
      const validEmailLength = EmailValue.match(/[a-zA-Z0-9\b.@]/gi)?.length;
      if (control.value.length !== validEmailLength) {
        return {
          'IsUnwantedSpecialCharcters': true
        }
      }
    }
    return null;
  }


  EmailDomain(control: FormControl): { [key: string]: boolean } | null {
    console.log("control is Executed", control);
    let EmailValue: string = control.value;
    let IsValidDomain: boolean = null;
    if (EmailValue !== null) {
      let [, Domain] = EmailValue.split('@');
      if (Domain !== 'gmail.com') {
        return {
          'IsNotValidDomain': true
        }
      }
    }
    return null
  }
}
