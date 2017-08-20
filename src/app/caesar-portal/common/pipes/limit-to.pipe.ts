import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {
  transform(source: any[], from: number, to: number): any {
    if (source) {
      return source.filter((item, index) => index >= from && index <= to);
    }
  }
}
