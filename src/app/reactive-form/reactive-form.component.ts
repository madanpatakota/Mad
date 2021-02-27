import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  constructor() { }
  // tslint:disable-next-line: member-ordering
  // tslint:disable-next-line: no-trailing-whitespace
  // tslint:disable-next-line: typedef-whitespace
  // tslint:disable-next-line: one-line
  // tslint:disable-next-line: whitespace
  // tslint:disable-next-line: member-ordering
  // tslint:disable-next-line: whitespace
  name = "Madan";
  modDescription = "Test Decription";
  modDeveloper = 0;
  modTester = 0;
  modLoggedDate: Date = new Date();
  modClosedDate: Date = new Date();
  Relavants = [{ ID: 1, Name: "Yes" }, { ID: 2, Name: "No" }, { ID: 3, Name: "Other" }];

  RModName = "Madan Model";
  RTestFormGroup:FormGroup;

  @ViewChild('RTestForm') RTestForm: NgForm;
  //@ViewChild('RTestFormGroup') RTestFormGroup: FormGroup;

  TeamList: Array<{ Id: number, Name: string, RoleID: string }> =
    [
      {
        Id: 1, Name: "Lakshmi", RoleID: "T1"
      },
      {
        Id: 2, Name: "Arjun", RoleID: "T1"
      },
      {
        Id: 3, Name: "Madan", RoleID: "D1"
      },
      {
        Id: 4, Name: "Rakshith", RoleID: "D1"
      },
      {
        Id: 5, Name: "Barsa", RoleID: "D1"
      }];

  Priorites: Array<string> = ["High", "Low", "Average"];

  StatusList: Array<string> = ["Completed", "InProgress", "Not Completed", "Pending", "Other"];

  evtDefault() {
    const DeveloperName = 2;

  }

  ngOnInit(): void {
    this.RTestFormGroup = new FormGroup({
      RName : new FormControl('Test madan', Validators.required),
      TestDetails : new FormGroup({
        Description: new FormControl('Descriptin has added' , [Validators.required, Validators.minLength(20)]),
        Relavant: new FormControl('1')
      }),
      Developer: new FormControl('4', [Validators.required]),
      Tester: new FormControl('1', [Validators.required]),
      Reporter: new FormControl('1', [Validators.required]),
      LoggedDate: new FormControl(new Date(), [Validators.required]),
      ClosedDate: new FormControl(new Date(), [Validators.required]),
      CComments: new FormControl('Comments section has added by default', [Validators.required])
    });

  }

  SubmitTestForm(testForm) {
    console.log(testForm);
  }

  evtReset() {

  }
  evtRTestForm() {
    console.log(this.RTestFormGroup);
  }

}
