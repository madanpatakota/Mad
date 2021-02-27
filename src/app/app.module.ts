import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestFormComponent } from './test-form/test-form.component';

import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { CustomValidationComponent } from './custom-validation/custom-validation.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateApproachFormComponent } from './template-approach-form/template-approach-form.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { ROUTES, Routes, RouterModule } from '@angular/router';
import { CanActivateGuardGuard } from './can-activate-guard.guard';

// path : '/' , component : AppComponent , canActivate :[CanActivateGuardGuard]},
const routers: Routes = [{
   path : 'Reactive' , component : ReactiveFormComponent },
   {path:'CustomValidation' , component : CustomValidationComponent},
   {path:'Dynamic' , component : DynamicTableComponent},
   {path : '' , component : TemplateApproachFormComponent}
  ];


@NgModule({
  declarations: [
    AppComponent,
    TestFormComponent,
    CustomValidationComponent,
    ReactiveFormComponent,
    TemplateApproachFormComponent,
    DynamicTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
