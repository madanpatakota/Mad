import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SchoolService } from '../school.service';
import { Subscription } from 'rxjs';

export interface IClass {
  ID: number;
  Name: string;
}

@Component({
  selector: 'app-shome',
  templateUrl: './shome.component.html',
  styleUrls: ['./shome.component.css'],
  providers: [SchoolService]
})
export class SHomeComponent implements OnInit {

  constructor(private router: Router, private schoolService: SchoolService, private activateRoute: ActivatedRoute) { }
  // YOu should use in case if you add routerstate otherwise you get the errror
  modClass = "";

  subscription: Subscription;
  ListClass: Array<IClass> = [];
  ngOnInit(): void {

    this.subscription = this.schoolService.IsAutheticated.subscribe((param) => {
      console.log(param + " IsAuthenticataed subscription in Home component");
    });

    this.ListClass = [{
      ID: 1,
      Name: "First"
    },
    {
      ID: 2,
      Name: "Second"
    },
    {
      ID: 3,
      Name: "Third"
    }];

  }

  evtNext() {
    console.log(this.modClass);
    //Here Params wil give undefined value..
    //this.router.navigate(["Details", +this.modClass], { relativeTo: this.activateRoute });
    this.router.navigate(["Details", this.modClass], { relativeTo: this.activateRoute });
  }

}
