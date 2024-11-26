import { Component, Input } from '@angular/core';
import { Posts } from '../../../types';

@Component({
  selector: 'app-ai-template-below',
  standalone: true,
  imports: [],
  templateUrl: './ai-template-below.component.html',
  styleUrl: './ai-template-below.component.scss'
})
export class AiTemplateBelowComponent {
  @Input('post') post: Posts | null = null;
}
