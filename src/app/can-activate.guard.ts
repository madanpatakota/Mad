import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomersService } from './customers.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
  constructor(private customersSerivce: CustomersService, private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    ////debuuger;
    const Customers = this.customersSerivce.getCustomers()
      .find((params: any) => {
        return params["ID"] === +next.params["LoginID"];
      });

    if (Customers["ID"] === 1 || Customers["ID"] === 2) {
      return true;
    }
    else {
      alert("Access Denied");
      this.router.navigate(["/"]);
      //return false;
    }
  }

}
