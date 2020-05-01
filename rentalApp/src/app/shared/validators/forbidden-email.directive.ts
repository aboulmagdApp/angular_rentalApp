import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl} from '@angular/forms';
import { forbiddenEmailValidator} from './functions'

@Directive({
    selector: '[forbiddenEmail]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: ForbiddenEmailDirective,
            multi: true
        }
    ]
})
export class ForbiddenEmailDirective implements Validator{
    @Input() forbiddenEmail: string;

    validate(control: AbstractControl): {[key: string]: any} | null {
        debugger
        return this.forbiddenEmail ? forbiddenEmailValidator(this.forbiddenEmail)(control): null
    }
}