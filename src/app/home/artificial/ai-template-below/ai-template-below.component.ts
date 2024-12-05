import { Component, Input } from '@angular/core';
import { Post } from '../../../types/post/post';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ai-template-below',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ai-template-below.component.html',
  styleUrl: './ai-template-below.component.scss'
})
export class AiTemplateBelowComponent {
  @Input('post') post: Post | null = null;
}
