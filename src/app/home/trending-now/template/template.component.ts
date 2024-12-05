import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post } from '../../../types/post/post';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class TemplateComponent {
@Input('post') post: Post | null = null;
}
