import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseTitle',
  standalone: true,
})
export class CourseTitlePipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    if (value !== '') {
      value = value;
    } else {
      value = value.replace(value, 'Course Title');
    }
    return value;
  }
}
