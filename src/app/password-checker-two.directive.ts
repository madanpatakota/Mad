import { Directive, Input } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors, NG_VALIDATORS, Validator } from '@angular/forms';


export function passwordChecker(Password, ConfirmPasswordOne, ConfirmPasswordTwo): ValidatorFn {
  return (control: AbstractControl): ValidationErrors => {
    // const controlToCompare = control.parent.get(this.appPasswordChecker);
    if (Password && ConfirmPasswordOne && ConfirmPasswordTwo &&
      (Password === ConfirmPasswordOne) && ( ConfirmPasswordOne === ConfirmPasswordTwo)) {
      return null
    }
    return { "notMatch": true };
  }
}

@Directive({
  selector: '[appPasswordCheckerTwo]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordCheckerTwoDirective,
    multi: true
  }]
})

export class PasswordCheckerTwoDirective {
  @Input('appPasswordCheckerTwo') duplicateappPasswordChecker: string[];

  validate(control: AbstractControl): { [key: string]: any } | null {
    const Password = this.duplicateappPasswordChecker[0];
    const CPasswordOne = this.duplicateappPasswordChecker[1];
    //const CPasswordTwo = this.duplicateappPasswordChecker[2]; moha
    const CPasswordControlValue = control.value;
    return passwordChecker(Password, CPasswordOne, CPasswordControlValue)(control)
  }

}
