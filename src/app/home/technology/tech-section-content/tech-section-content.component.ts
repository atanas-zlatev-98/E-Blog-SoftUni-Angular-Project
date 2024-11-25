import { Component, Input } from '@angular/core';
import { Posts } from '../../../types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tech-section-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tech-section-content.component.html',
  styleUrl: './tech-section-content.component.scss'
})
export class TechSectionContentComponent {
  @Input('post') post: Posts | null = null;
}
