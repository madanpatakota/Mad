import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SchoolService } from '../school.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-school-main',
  templateUrl: './school-main.component.html',
  styleUrls: ['./school-main.component.css'],
})
export class SchoolMainComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private activatedRouter: ActivatedRoute, public schoolService: SchoolService) { }
  subscription: Subscription;
  message: string;

  ngOnInit(): void {
  }

  evtNavigation(navigateionPage,FormControl:ElementRef) {
    const control = FormControl.nativeElement;
    this.router.navigate([navigateionPage], { relativeTo: this.activatedRouter });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
