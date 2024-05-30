import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseDescription',
  standalone: true,
})
export class CourseDescriptionPipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    if (value !== '') {
      value = value;
    } else {
      value = value.replace(value, 'Course Description');
    }
    return value;
  }
}
