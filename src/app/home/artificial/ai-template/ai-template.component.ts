import { Component, Input } from '@angular/core';
import { Posts } from '../../../types';

@Component({
  selector: 'app-ai-template',
  standalone: true,
  imports: [],
  templateUrl: './ai-template.component.html',
  styleUrl: './ai-template.component.scss'
})
export class AiTemplateComponent {
  @Input('post') post: Posts | null = null;
}
