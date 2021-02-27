import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanDeActivateGuard } from './can-de-activate.guard';
import { HistoryComponent } from './history/history.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateHistoryGuard implements CanDeactivate<HistoryComponent> {

  isDeactivated = false;
  canDeactivate(
    component: HistoryComponent,
    activatedRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isDeactivated = true;
    if (component.canDeactivate()) {
      this.isDeactivated = true;
    }
    else {
      this.isDeactivated = false;
    }
    return isDeactivated;
  }

}
