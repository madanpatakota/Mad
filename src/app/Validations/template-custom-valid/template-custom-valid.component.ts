
import { Component, OnInit, ElementRef, ViewChild, Input, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
//import {phoneNumberValidatorOne} from '.../phone-number-validator';


@Component({
  selector: 'app-template-custom-valid',
  templateUrl: './template-custom-valid.component.html',
  styleUrls: ['./template-custom-valid.component.css']
})
export class TemplateCustomValidComponent implements OnInit {

  constructor() { }

  phone: string = "";
  password: string = "";
  confirmPassword: string = "";
  AconfirmPassword: string = "";
  //@Input('appPasswordChecker') passwordChecker;

  //ConfirmPassword: FormControl = new FormControl(null, [])

  ngOnInit(): void {
  }


  //@ViewChild('phonengControl') phoneModel: ElementRef;
  @ViewChild('confirmPasswordControl') ConfirmPassword: ElementRef;
  @ViewChild('AconfirmPasswordControl') AconfirmPasswordControl: ElementRef;
  evtSubmit() {
    //    console.log("phone", this.phoneModel);
    //   console.log("confirmPassword", this.ConfirmPassword)
    console.log("passwordChecker", this.AconfirmPasswordControl);
  }

}
