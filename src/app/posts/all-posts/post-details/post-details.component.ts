import { Component, Input } from '@angular/core';
import { Posts } from '../../../types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss'
})
export class PostDetailsComponent {
@Input('post') post: Posts | null = null;
}
