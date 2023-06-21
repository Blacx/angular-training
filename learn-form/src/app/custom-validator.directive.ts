import { Directive } from '@angular/core';
import { Validator, ValidationErrors, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appCustomValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CustomValidatorDirective,
      multi: true
    }
  ]
})
export class CustomValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl) : ValidationErrors | null {
    const  value = control.value;

    if(value == "error") {
      return { customError: true };
    }

    return null;
  }


}
