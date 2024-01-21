import { Directive, Provider, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

const DATE_VALUE_PROVIDER: Provider = {
  provide: NG_VALUE_ACCESSOR,
  // forwardRef fixes DateValueAccessorDirective definition issue
  useExisting: forwardRef(() => DateValueAccessorDirective),
  // multiple providers are registered as ng provider accessors
  multi: true,
};
@Directive({
  selector:
    'input([type=date])[formControlName],input([type=date])[formControl],input([type=date])[ngModel]',
  providers: [DATE_VALUE_PROVIDER],
})
export class DateValueAccessorDirective {
  constructor() {}
}
