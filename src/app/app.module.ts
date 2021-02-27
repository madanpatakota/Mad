import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateApproachComponent } from './template-approach/template-approach.component';
import { ReactiveApproachComponent } from './reactive-approach/reactive-approach.component';
import { ReacativeApproachTwoComponent } from './reacative-approach-two/reacative-approach-two.component';
import { ValidFirstComponent } from './Validations/valid-first/valid-first.component';
import { ValidSecondComponent } from './Validations/valid-second/valid-second.component';
import { PhoneNumberValidatorDirective } from './phone-number-validator.directive';
import { TemplateCustomValidComponent } from './Validations/template-custom-valid/template-custom-valid.component';
import { ReactiveCustomValidComponent } from './Validations/reactive-custom-valid/reactive-custom-valid.component';
import { PasswordCheckerDirective } from './password-checker.directive';
import { PasswordCheckerTwoDirective } from './password-checker-two.directive';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [{
  path: 'ValidFirst', component: ValidFirstComponent
},
{ path: 'ValidSecond', component: ValidSecondComponent },
{ path: 'TemplateApproach', component: TemplateApproachComponent },
{ path: 'ReactiveApproach', component: ReactiveApproachComponent },
{ path: 'ReactiveApproach2', component: ReacativeApproachTwoComponent },
{
  path: '', redirectTo: 'ValidFirst', pathMatch: 'full'
}]


//import {phoneNumberValidatorOne} from './phone-number-validator';

@NgModule({
  declarations: [
    AppComponent,
    TemplateApproachComponent,
    ReactiveApproachComponent,
    ReacativeApproachTwoComponent,
    ValidFirstComponent,
    ValidSecondComponent,
    PhoneNumberValidatorDirective,
    TemplateCustomValidComponent,
    ReactiveCustomValidComponent,
    PasswordCheckerDirective,
    PasswordCheckerTwoDirective
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
