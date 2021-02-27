//import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Validations';



  selectGroup: FormGroup = null;

  ngOnInit() {
    console.log("page has refreshed");
    this.router.navigate(['']);
  }


  constructor(private Arouter: ActivatedRoute, private router: Router, private ActivatedRoute: ActivatedRoute) {
    this.selectGroup = new FormGroup({
      DefaultValue: new FormControl('1')
    })

    //this.selectGroup.markAsPristine;
    //this.selectGroup.controls['DefaultValue'];

    //let fControl = new FormControl();

    //fControl.u

  }


  routeObj = 2;

  routes = [{
    id: '1', name: "One", routeName: 'ValidFirst'
  }, {
    id: '2', name: "Second", routeName: 'ValidSecond'
  },
  {
    id: '3', name: "Template", routeName: 'TemplateApproach'
  },
  {
    id: '4', name: "Reactive", routeName: 'ReactiveApproach'
  },
  {
    id: '5', name: "Reactive2", routeName: 'ReactiveApproach2'
  }]

  routerName = 0;
  findObject: any = {};
  url = '';
  evtChange(obj) {
    this.routerName = this.selectGroup.get('DefaultValue').value;

    this.findObject = this.routes.find(x => x.id == this.routerName.toString());

    console.log(this.router);

    //Object.prototype.toString.call(obj);
    //let obj1 = new obj();
    //console.log(obj.name);
    //this.url = '';
    this.url = this.router.url.split("/")[0] + this.findObject.routeName;
    this.router.navigate([this.url]);
  }

}
