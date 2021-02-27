import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-approach',
  templateUrl: './template-approach.component.html',
  styleUrls: ['./template-approach.component.css']
})
export class TemplateApproachComponent implements AfterViewInit {

  @ViewChild("form") userForm: NgForm

  CityList: Array<{ Id: number, Name: string }> =
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

  ngAfterViewInit(): void {
    console.log("Before Form Submission", this.userForm);
    setTimeout(() => {
      // this.userForm.form.patchValue({
      //   "CityName": "1"
      // })
      this.userForm.setValue({
        "CityName": "1",
        "fUserName": "User one"
      });
    }, 10);
  }

  evtSubmit() {
    console.log("After Form Submission", this.userForm)
  }




}
