import { Component } from '@angular/core';
import { Post } from '../../../types/post/post';
import { PostService } from '../../../services/post/post.service';
import { CryptoTrendSingleComponent } from "./crypto-trend-single/crypto-trend-single.component";

@Component({
  selector: 'app-crypto-trend',
  standalone: true,
  imports: [CryptoTrendSingleComponent],
  templateUrl: './crypto-trend.component.html',
  styleUrl: './crypto-trend.component.scss'
})
export class CryptoTrendComponent {
  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((posts) => {
      this.posts = posts.filter(x=>x.postTrend ==='Crypto').reverse();
    })
  }
}
