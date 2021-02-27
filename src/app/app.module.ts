import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { NgModule, Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './Customers/customer/customer.component';
import { LoginComponent } from './login/login.component';
import { CanActivateGuard } from './can-activate.guard';
import { CanDeActivateGuard } from './can-de-activate.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpdatesResolver } from './updates-resolver';

// const appRoutes: Routes = [
//   { path: '', component: LoginComponent },
//   { path: 'Customers', loadChildren: './customers/customers.module#CustomersModule' },
//   {
//     path: 'not-found', component: NotFoundComponent,
//     data: ["Not Found Page.Please try again with Proper URL"]
//   },
//   { path: '**', redirectTo: 'not-found' }
// ];

const appRoutes: Routes = [
  { path: '', component: LoginComponent  , resolve: { comments: UpdatesResolver }},
  {
    path: 'Customers/:LoginID', component: CustomersComponent,
    canActivate: [CanActivateGuard],
    canDeactivate: [CanDeActivateGuard],
    children: [{
      path: 'Customer', component: CustomerComponent}]
  },
  {
    path: 'not-found', component: NotFoundComponent,
    data: ["Not Found Page.Please try again with Proper URL"]
  },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
