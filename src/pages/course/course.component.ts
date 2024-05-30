import { Component } from '@angular/core';
import { CourseTitlePipe } from '../../pipes/course/course-title/course-title.pipe';
import { CourseDescriptionPipe } from '../../pipes/course/course-decription/course-description.pipe';
import { Course } from '../../models/course/course';
import { TagTitlePipe } from '../../pipes/tag/tag-title/tag-title.pipe';
import { LowerCasePipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [
    LowerCasePipe,
    TagTitlePipe,
    CourseTitlePipe,
    CourseDescriptionPipe,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent {
  courses: Course[] = [
    {
      id: 1,
      title: 'Computer Science',
      description: 'Decription here...',
      category: 'Computer Science',
      tag: 'Computer Science',
    },
  ];
}
