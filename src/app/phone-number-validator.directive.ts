import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';


@Directive({
    selector: '[phoneValidateDirective][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,   // Token
        useValue: new PhoneNumberValidatorDirective(),
        multi: true
    }]
})

export class PhoneNumberValidatorDirective implements Validator {
    
    validate(control: AbstractControl): { [key: string]: any } | null {
        if (control.value && control.value.length != 10) {
            return { 'phoneNumberInvalid': true };
        }
        return null
    }
}
