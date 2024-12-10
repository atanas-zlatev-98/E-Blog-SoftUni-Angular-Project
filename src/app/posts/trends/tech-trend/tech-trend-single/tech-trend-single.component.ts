import { Component, Input } from '@angular/core';
import { Post } from '../../../../types/post/post';
import { RouterLink } from '@angular/router';
import { SummaryPipe } from '../../../../pipes/summary.pipe';

@Component({
  selector: 'app-tech-trend-single',
  standalone: true,
  imports: [RouterLink,SummaryPipe],
  templateUrl: './tech-trend-single.component.html',
  styleUrl: './tech-trend-single.component.scss'
})
export class TechTrendSingleComponent {
  @Input('post') post: Post | null = null;
}
