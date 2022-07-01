import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { SchoolService } from '../school.service';
import { Subscription, Observable } from 'rxjs';
import { $ } from 'protractor';

@Component({
  selector: 'app-school-login',
  templateUrl: './school-login.component.html',
  styleUrls: ['./school-login.component.css']
})
export class SchoolLoginComponent implements OnInit, OnDestroy {

  constructor(private route: Router, private activateRouter: ActivatedRoute, private schoolService: SchoolService) { }

  info = new Observable<string>();
  schoolLoginForm: FormGroup;
  schollFormBuilder: FormBuilder;
  subscription: Subscription;

  ngOnInit(): void {
    this.schoolLoginForm = new FormGroup({
      'SchoolName': new FormControl(null, [Validators.required]),
      'SchoolPassword': new FormControl(null, [Validators.required])
    });

    this.subscription = this.schoolService.IsAutheticated.subscribe((param) => {
      if (param) {
        debugger;
        this.route.navigate(['Main'], { relativeTo: this.activateRouter });
      }
      else {
        console.log("Not allowed");
        //bootbox.alert("User Name is incorrect");
      }
    });
  }
  evtSchoolLoginFormSubmit() {
    const ShoolName = this.schoolLoginForm.get('SchoolName').value;
    this.schoolService.LoggedStatus(ShoolName);
    this.route.navigate(['Main'], { relativeTo: this.activateRouter });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
