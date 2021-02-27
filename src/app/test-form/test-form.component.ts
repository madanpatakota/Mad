import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

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
  @ViewChild('vTestForm') VTTestForm: NgForm;
  @ViewChild('RTestForm') RTestForm: NgForm;
  @ViewChild('RTestFormGroup') RTestFormGroup: FormGroup;

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

  modDeveloper = 0;
  modTester = 0;
  modLoggedDate: Date = new Date();
  modClosedDate: Date = new Date();
  Relavants = [{ ID: 1, Name: "Yes" }, { ID: 2, Name: "No" }, { ID: 3, Name: "Other" }];

  // TestersList : Array<{Id : string , Name : string}> = [{
  //   Id : 'T1',
  //   Name : "Arjun"
  // },{
  //   Id : "T2",
  //   Name : "Lakshmi"
  // }]

  Priorites: Array<string> = ["High", "Low", "Average"];

  StatusList: Array<string> = ["Completed", "InProgress", "Not Completed", "Pending", "Other"];

  RModName = "Test Name Madan";

  // LoggedIn : Date = new Date();
  // ClosedIn : Date = new Date();

  evtDefault() {
    const DeveloperName = 2;
    this.VTTestForm.setValue({
      Name: "Country Name is not displayed",
      CommentsGroup: {
        Description: 'Country Name is not displayed By Designer',
        Relavant: 1,
      },
      Developer: 1,
      Tester: '2',
      Reporter: '3',
      LoggedDate: new Date(),
      ClosedDate: new Date(),
      CComments: 'Country Name has issue due to not selected the city Name'
    });

    this.VTTestForm.form.patchValue({
      Name: "patch value is added Country Name is not displayed",
      LoggedDate: new Date(),
      ClosedDate: new Date(),
      CComments: 'Patch value is added for Country Name has issue due to not selected the city Name'
    });

  }

  ngOnInit(): void {
    this.RTestFormGroup = new FormGroup({
      'RName' : new FormControl('Test madan')
    });
  }

  SubmitTestForm(testForm) {
    console.log(testForm);
  }

  evtReset() {
    this.VTTestForm.reset();
  }
  evtRTestForm(evtRTestForm: NgForm) {
    // this.RTestForm = new NgForm(new FormGroup({'Name' : FormControl()}));
    console.log(this.RTestForm);
  }

  SubmitTestRForm() {

  }
}
