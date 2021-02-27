import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanDeactivateHistoryComponent {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})

//Do't use
//export class CanDeActivateGuard<HistoryComponent> implements CanDeactivate<HistoryComponent> {
export class CanDeActivateGuard implements CanDeactivate<CanDeactivateHistoryComponent> {

  canDeactivate(component: CanDeactivateHistoryComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      debugger;
    return component.canDeactivate ? component.canDeactivate() : false;
    //return component.canDeactivate();
  }
}
