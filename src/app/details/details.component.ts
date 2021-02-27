import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterState, Navigation } from '@angular/router';
import { JsonPipe } from '@angular/common';


export interface Member {
  Gender: string;
  Teacher: string;
  Student: string;
  Standard: number;
}
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  currentURL: string = '';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.currentURL = this.router.url;
    this.activatedRoute.params.subscribe(param=>{
      debugger;
      console.log(param);
    });
  }

  Classmembers: Member[];
  classID: number;

  ngOnInit(): void {

    this.router.events.subscribe((event) => {
      console.log(event);
    });

    debugger;
    this.classID = +this.activatedRoute.snapshot.params["classID"];

    // this.activatedRoute.params.subscribe(param=>{
    //   debugger;
    //   console.log(param);
    // });

    //this.Classmembers
    //const classID = 1;
    this.Classmembers = [{
      Gender: "Male/Boy",
      Teacher: "5",
      Student: "10",
      Standard: this.classID
    }, {
      Gender: "FeMale/Girl",
      Teacher: "3",
      Student: "5",
      Standard: this.classID
    }];
  }


  //this.router.url
  // this.router.navigate([this.currentURL + "/members"],
  //   { relativeTo: this.activatedRoute });

  // [object Object] Problem Solution is JSON.Stringify

  //this.router.navigate([this.currentURL + "/members", { queryParams: { 'mem': member } }]);
  evtMember(member: Member, Role: string) {
    debugger;
    this.router.navigate([this.currentURL + "/members"],
      {
        queryParams:
        {
          'mem': JSON.stringify(
            {
              "Gender": member.Gender,
              "Role": Role
            })
        }
      });


    //Below steps gives this URL
    //Main/Details/2/members;queryParams=%5Bobject%20Object%5D
    // this.router.navigate([this.currentURL + "/members", {
    //   queryParams:
    //   {
    //     'mem': JSON.stringify(
    //       {
    //         "Gender": member.Gender,
    //         "Role": Role
    //       })
    //   }
    // }]
    // );


    //this.router.navigate([this.currentURL + "/members"]);
  }

}


