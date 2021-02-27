import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomersComponent } from './customers/customers.component';
import { GetCustomersComponent } from './customers/get-customers/get-customers.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';

import { ToastrModule } from 'ngx-toastr';
import { GlobalExceptionHandlerService } from './global-exception-handler.service';
import { GlobalErrorComponent } from './global-error/global-error.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomHttpInterceptor } from './custom-http.interceptor';

const appRoutes: Routes = [
  {
    path: '', component: CustomersComponent
  }, {
    path: 'error', component: GlobalErrorComponent
  }, {
    path: 'customer', redirectTo: '', pathMatch: 'full'
  }];


@NgModule({
  declarations:
    [
      AppComponent,
      CustomersComponent,
      GetCustomersComponent,
      CreateCustomerComponent,
      GlobalErrorComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [NgbActiveModal,
    {
      provide: ErrorHandler,
      useClass: GlobalExceptionHandlerService
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
