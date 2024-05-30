import { Component } from '@angular/core';
import { TagComponent } from '../../components/tag/tag.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TagComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  tagParentDiv ="m-auto p-2 h-auto w-full bg-violet-800";
}
