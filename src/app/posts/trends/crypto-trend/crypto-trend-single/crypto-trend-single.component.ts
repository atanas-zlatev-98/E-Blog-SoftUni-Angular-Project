import { Component, Input } from '@angular/core';
import { Post } from '../../../../types/post/post';
import { RouterLink } from '@angular/router';
import { SummaryPipe } from '../../../../pipes/summary.pipe';

@Component({
  selector: 'app-crypto-trend-single',
  standalone: true,
  imports: [RouterLink,SummaryPipe],
  templateUrl: './crypto-trend-single.component.html',
  styleUrl: './crypto-trend-single.component.scss'
})
export class CryptoTrendSingleComponent {
  @Input('post') post: Post | null = null;
}
