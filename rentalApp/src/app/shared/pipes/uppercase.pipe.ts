import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upper'
})
export class UppercasePipe implements PipeTransform {

  transform(value: string) {
    if(!value || typeof value !== 'string') {return ''}
    return value.toUpperCase();
  }

}
