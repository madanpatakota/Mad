import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SchoolService } from './school.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {

  constructor(private router: Router, public schoolService: SchoolService) {
    //const abc = this.activatedSnapShot.params;
    //const def = this.routerStateSnapshot.url;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean
      | UrlTree> | boolean | UrlTree {
    // const AuthenticatedService = this.schoolService.IsAutheticated.toPromise();
    // return AuthenticatedService.then((param) => {
    //   console.log("enter into promise....");
    //   if (param !== "abc") {
    //     this.router.navigate(["not-found"]);
    //   }
    //   else {
    //     return false;
    //   }
    // });
    // return false;
    // this.schoolService.LoggeduserPromise().then((params) => {
    //   console.log("promise", params);
    // });
    //return false;
    //debugger;
    //This code is repeats...
    //this.schoolService.IsAutheticated.next("not Allowed from router");
    //Wo't allowed to next router
    const params = next.params;
    debugger;
    return true;
    //return false;
    //If you do't pass service into constructor . here this refers to new SchoolService.
    // Angular creates instance of the service here.
    // new SchoolService().IsAutheticated.subscribe((param) => {
    //   console.log("Madan");
    // });
    //return true;
    //If you do't pass service into constructor . here this refers to new SchoolService.
    // Angular creates instance of the service here.
    console.log("can active guard is activated.....");
    //do't use subscribe in router instead u call promise or observable
    // this.schoolService.message.subscribe((param) => {
    //   console.log("can active guard is activated message.....");
    //   if (param !== "abc") {
    //     this.router.navigate(["not-found"]);
    //     return this.IsAccessd;
    //   }
    //   else {
    //     return this.IsAccessd = false;
    //   }
    //   // return this.IsAccessd;
    // });
    // return this.IsAccessd;
  }
}
