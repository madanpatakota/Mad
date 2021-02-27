import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';



export interface CanDeactivateCustomersComponent {
  canDeactivate: () => boolean;
}


@Injectable({
  providedIn: 'root'
})
export class CanDeActivateGuard implements
 CanDeactivate<CanDeactivateCustomersComponent> {
  canDeactivate(
    component: CanDeactivateCustomersComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    //debuuger;
    return component.canDeactivate ?
      component.canDeactivate() : false;

  }

}
