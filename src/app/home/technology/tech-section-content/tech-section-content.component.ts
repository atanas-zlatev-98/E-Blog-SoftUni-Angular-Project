import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post } from '../../../types/post/post';

@Component({
  selector: 'app-tech-section-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tech-section-content.component.html',
  styleUrl: './tech-section-content.component.scss'
})
export class TechSectionContentComponent {
  @Input('post') post: Post | null = null;
}
