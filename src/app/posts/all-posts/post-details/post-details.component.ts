import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post } from '../../../types/post/post';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss'
})
export class PostDetailsComponent {
@Input('post') post: Post | null = null;
}
