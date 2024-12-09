import { Component, Input } from '@angular/core';
import { Post } from '../../../types/post/post';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-ten-single',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './top-ten-single.component.html',
  styleUrl: './top-ten-single.component.scss'
})
export class TopTenSingleComponent {
  @Input('post') post: Post | null = null;
}
