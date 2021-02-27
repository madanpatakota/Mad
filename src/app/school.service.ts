import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { promise } from 'protractor';


@Injectable({ providedIn: 'root' })
export class SchoolService {

  constructor() {
  }
  // IsAutheticated: Subject<any>;
  //Cannot read property 'next' of undefined
  public IsAutheticated = new Subject();
  //public message = new Subject<string>();

  public userCreditantials = null;

  LoggedStatus(userName: string) {
    if (userName === "abc") {
      this.IsAutheticated.next(true);
    }
    // tslint:disable-next-line: one-line
    else {
      this.IsAutheticated.next(false);
    }
    // this.IsAutheticated.next("Allowed");
  }

  LoggeduserPromise() {
   return this.userCreditantials = new Promise((resolve, reject) => {
      resolve({ Authenticated: true });
    });
  }

  
}


