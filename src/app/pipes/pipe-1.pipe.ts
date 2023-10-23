import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe1'
})
export class Pipe1Pipe implements PipeTransform {

  transform(value: string): string {



   var res =   value.replace(/(\d{4})/g, '$1 - ');
     return res;



}

}
