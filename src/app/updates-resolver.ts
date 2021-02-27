import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

//Uncaught (in promise): NullInjectorError: R3InjectorError(AppModule)[UpdatesResolver -> UpdatesResolver -> UpdatesResolver]: 
 //NullInjectorError: No provider for UpdatesResolver!
@Injectable({
   providedIn: 'root'
 })
export class UpdatesResolver implements Resolve<any> {

   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : any {
      //debuuger;
      return "Data from Resolver interface.........";
   }
}
