import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Tag } from '../../models/tag/tag';
@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css',
})
export class TagComponent {
  tagList: Tag[] | undefined;
  // tagList = [
  //   {
  //     id: 1,
  //     title: 'Computer Science',
  //     description: 'Description here...',
  //   },
  //   {
  //     id: 2,
  //     title: 'Django',
  //     description: 'Description here...',
  //   },
  //   {
  //     id: 3,
  //     title: 'React',
  //     description: 'Description here...',
  //   },
  //   {
  //     id: 4,
  //     title: 'Svelt',
  //     description: 'Description here...',
  //   },
  //   {
  //     id: '5',
  //     title: 'Computer Science',
  //     description: 'Description here...',
  //   },
  //   {
  //     id: 6,
  //     title: 'Angular',
  //     description: 'Description here...',
  //   },
  //   {
  //     id: 7,
  //     title: 'Computer Science',
  //     description: 'Description here...',
  //   },
  //   {
  //     id: 8,
  //     title: 'JavaScript',
  //     description: 'Description here...',
  //   },
  //   {
  //     id: 9,
  //     title: 'JavaScript',
  //     description: 'Description here...',
  //   },
  //   {
  //     id: 10,
  //     title: 'JavaScript',
  //     description: 'Description here...',
  //   },
  // ];
  active = 'text-sky-400/100';

  tagClass = 'm-auto p-2 h-auto w-auto rounded-full bg-violet-200';

  constructor() {}
}
