import { AbstractControl, ValidatorFn } from '@angular/forms';

export class NumberValidators {

    static rangeHardCoded(control: AbstractControl): any {
        if (control.value && (isNaN(control.value) || control.value < 1 || control.value > 5)) {
            return { 'range': true };
        }
        return null;
    }





    static range(min: number, max: number): ValidatorFn {
        return (control: AbstractControl): { [key: string]: boolean } => {
            if (control.value && (isNaN(control.value) || control.value < min || control.value > max)) {
                return { 'range': true };
            }
            return null;
        };
    }
}
