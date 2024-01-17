import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genericPipe'
})
export class GenericPipe implements PipeTransform {
  transform<T, U, V>(value1: T, callback: (value1: T, value2?: U) => V, value2?: U): V{
    return callback(value1, value2);
  }

}
