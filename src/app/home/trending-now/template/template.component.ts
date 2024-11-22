import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Posts } from '../../../types';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class TemplateComponent {
@Input('post') post: Posts | null = null;
}
