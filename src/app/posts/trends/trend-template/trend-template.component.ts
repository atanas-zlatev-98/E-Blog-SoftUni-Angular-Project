import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post } from '../../../types/post/post';

@Component({
  selector: 'app-trend-template',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './trend-template.component.html',
  styleUrl: './trend-template.component.scss'
})
export class TrendTemplateComponent {
  @Input('post') post: Post | null = null;
}
