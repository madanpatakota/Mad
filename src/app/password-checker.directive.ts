import { Directive, Input } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors, NG_VALIDATORS, Validator } from '@angular/forms';


// Iam using appPasswodCheckeer Director via NG_Validators dependecny Token and maintains multi providers 
// Means Angular injects multiple values for a single token that is used for a multi provider
// Do't use the useValue : new PasswordCheckerDirective() becuase @input value is getting undefined.
@Directive({
  selector: '[appPasswordChecker]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordCheckerDirective,
    multi: true
  }]
})
export class PasswordCheckerDirective implements Validator {
  constructor() { }
  // ValidationErrors is type which can return the object { key is string and value is any }
  // Abstractcontrol is a abstract class like a base class for formcontrol or formgroup
  @Input('appPasswordChecker') duplicateappPasswordChecker: string;


  validate(control: AbstractControl): { [key: string]: any } | null {
    // return (control: AbstractControl): ValidationErrors => {
    //const controlToCompare = control.parent.get(this.duplicateappPasswordChecker);
    const controlToCompare = this.duplicateappPasswordChecker;

    console.log("password value", controlToCompare);
    console.log("confirmpassword value ", control.value);

    if (controlToCompare && controlToCompare !== control.value) {
      return {
        "notMatch": true
      };
    }
    return null;
    // }
  }
}
