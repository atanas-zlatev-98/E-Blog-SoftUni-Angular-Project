import { Component, Input } from '@angular/core';
import { Post } from '../../../types/post/post';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ai-template',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ai-template.component.html',
  styleUrl: './ai-template.component.scss'
})
export class AiTemplateComponent {
  @Input('post') post: Post | null = null;
}
