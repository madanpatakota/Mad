import { Component, OnInit } from '@angular/core';
import { IEmp } from '../Interfaces/iemp';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {

  Emp: IEmp[] = [{
    Name: 'Madan',
    Description: 'He is Boy',
    Location: 'Bangolore'
  }];
  constructor() {
  }

  dynamicRowGroup: FormGroup;
  dynamicRowArray: FormArray;




  ngOnInit(): void {
    this.dynamicRowGroup = new FormGroup({
      // tslint:disable-next-line: object-literal-key-quotes
      'RowsArray': new FormArray([])
    });
  }

  AddNewRow(){
    //  (this.dynamicRowGroup.get('RowsArray') as FormArray).controls.push(new FormGroup({
    //   Name:  new FormControl(null),
    //   Description: new FormControl(null),
    //   Location: new FormControl(null),
    // }));
    //console.log(Result.length
  }

}
