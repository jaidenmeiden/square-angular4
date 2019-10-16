import { Pipe, PipeTransform } from '@angular/core';
import * as linkifyStr from 'linkifyjs/string';

@Pipe({
  name: 'linkifystr'
})
export class LinkifystrPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    return value ? linkifyStr.default(value, {target: '_system'}): value;
  }

}
