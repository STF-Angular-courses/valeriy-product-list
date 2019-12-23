import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number, currency: string): string {
    switch (currency.toUpperCase()) {
      case 'USD': return '$' + value;
      case 'EUR': return '€' + value;
    }
  }

}
