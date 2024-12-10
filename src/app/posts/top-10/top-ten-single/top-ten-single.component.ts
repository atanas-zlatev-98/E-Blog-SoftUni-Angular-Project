import { Component, Input } from '@angular/core';
import { Post } from '../../../types/post/post';
import { RouterLink } from '@angular/router';
import { SummaryPipe } from '../../../pipes/summary.pipe';

@Component({
  selector: 'app-top-ten-single',
  standalone: true,
  imports: [RouterLink,SummaryPipe],
  templateUrl: './top-ten-single.component.html',
  styleUrl: './top-ten-single.component.scss'
})
export class TopTenSingleComponent {
  @Input('post') post: Post | null = null;
}
