import { Component, Input } from '@angular/core';
import { Post } from '../../../types/post/post';
import { RouterLink } from '@angular/router';
import { SummaryPipe } from '../../../pipes/summary.pipe';

@Component({
  selector: 'app-latest-news-single',
  standalone: true,
  imports: [RouterLink,SummaryPipe],
  templateUrl: './latest-news-single.component.html',
  styleUrl: './latest-news-single.component.scss'
})
export class LatestNewsSingleComponent {
@Input("posts") post:Post | null = null;
}
