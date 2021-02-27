import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { Router, ActivationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit , DoCheck {

  //fragmentData:any = null;
  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  //@Input('exportmemberDetails') importmember:string;
  ngDoCheck(){
     //console.log(this.fragmentData);
  }

  ngOnInit(): void {
    // this.activatedRoute.fragment.subscribe((params)=>{
    //    this.fragmentData = params;
    // })
  }
}
