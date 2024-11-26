import { Component, Input } from '@angular/core';
import { Posts } from '../../../types';

@Component({
  selector: 'app-latest-news-single',
  standalone: true,
  imports: [],
  templateUrl: './latest-news-single.component.html',
  styleUrl: './latest-news-single.component.scss'
})
export class LatestNewsSingleComponent {
@Input("post") post:Posts | null = null;
}
