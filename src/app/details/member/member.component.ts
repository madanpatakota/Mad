import { Component, OnInit, DoCheck, AfterViewInit, OnChanges, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { Member } from 'src/app/member';
//import { Member } from '../details.component';
import { Data } from 'src/app/data';
import { EventEmitter } from 'protractor';
//import  'rxjs/add/operator/switchMap';
//https://www.concretepage.com/angular-2/angular-resolve-guard-example

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit, DoCheck, AfterViewInit, OnChanges {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    console.log("Constructor loaded");
    //this.activatedRoute.params.pipe(switchMap)
    //this.activatedRoute.params.switchMap
  }

  memberDetail: any = null;

  classMembers = [];


  ngDoCheck() {
    // console.log("madan");
    // Always shouldnot send the data through Json and append to URL  
    // Is you gives member into params : Member then Params.mem wo't be come
    // this.activatedRoute.queryParams.subscribe((params: any) => {
    //   this.memberDetail = JSON.parse(params.mem);
    // })
    // const params = this.activatedRoute.snapshot.queryParams["mem"];
   debugger;
    this.classMembers = new Data().membersData.filter(value => {
      return value["Role"] === this.memberDetail["Role"]
        && value["Gender"] === this.memberDetail["Gender"].charAt(0)
    });
    //this.router.navigate([this.router.url],{fragment:})
    console.log("MOhan reddy");
  }

  ngAfterViewInit() {
    // console.log(this.classMembers);    

  }

  ngOnChanges() {
    console.log("Chanegs" + this.classMembers);
    console.log("Mohan");

  }

  ngOnInit(): void {
    // const params = this.activatedRoute.snapshot.queryParams["mem"];
    debugger;
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.memberDetail = JSON.parse(params.mem);
    })
    // console.log("madan"); 
  }

  //
  //@Output('exportmemberDetails') evtmemberDetails = new EventEmitter();
  evtAboutMember(classMember: any) {
    // this.router.navigate([this.router.url+'membersDetails'])
    // this.evtmemberDetails.emit(classMember);
   // this.router.navigate([this.router.url + "/memberDetails"])
  }


}
