import { Component, Input } from '@angular/core';
import { Post } from '../../../../types/post/post';
import { RouterLink } from '@angular/router';
import { SummaryPipe } from '../../../../pipes/summary.pipe';

@Component({
  selector: 'app-single-trend',
  standalone: true,
  imports: [RouterLink,SummaryPipe],
  templateUrl: './single-trend.component.html',
  styleUrl: './single-trend.component.scss'
})
export class SingleTrendComponent {
  @Input('post') post: Post | null = null;
}
