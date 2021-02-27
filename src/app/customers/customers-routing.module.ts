import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { CanActivateGuard } from '../can-activate.guard';
import { CanDeActivateGuard } from '../can-de-activate.guard';
import { CustomerComponent } from './customer/customer.component';
import { UpdatesResolver } from '../updates-resolver';


const routes: Routes = [
  {
    path: '', children: [{
      path: ':LoginID', component: CustomersComponent,
      canActivate: [CanActivateGuard],
      canDeactivate: [CanDeActivateGuard],
      children: [{
        path: 'Customer', component: CustomerComponent,
        resolve: { comments: UpdatesResolver }
      }]
    }]
  }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
