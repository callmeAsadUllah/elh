import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tagTitle',
  standalone: true,
})
export class TagTitlePipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    if (value !== '') {
      value = '#'.concat(value);
    } else {
      value = value.replace(value, '#'.concat('tag-title'));
    }
    return value;
  }
}
