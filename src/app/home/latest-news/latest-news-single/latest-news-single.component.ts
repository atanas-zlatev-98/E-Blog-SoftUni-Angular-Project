import { Component, Input } from '@angular/core';
import { Post } from '../../../types/post/post';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-latest-news-single',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './latest-news-single.component.html',
  styleUrl: './latest-news-single.component.scss'
})
export class LatestNewsSingleComponent {
@Input("posts") post:Post | null = null;
}
