import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrsena'
})
export class ContrsenaPipe implements PipeTransform {

  transform(value: string, mostrar: boolean = true): string {
    return (mostrar) ? '*'.repeat(value.length ): value;
  }

}
