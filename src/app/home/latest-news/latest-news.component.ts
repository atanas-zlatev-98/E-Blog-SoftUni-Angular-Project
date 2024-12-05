import { Component, OnInit } from '@angular/core';
import { LatestNewsSingleComponent } from './latest-news-single/latest-news-single.component';
import { PostService } from '../../services/post/post.service';
import { Post } from '../../types/post/post';

@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [LatestNewsSingleComponent],
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.scss'
})
export class LatestNewsComponent implements OnInit {
  constructor(private postService: PostService) {

  }

  posts: Post[] = [];

  ngOnInit(): void {
    this.postService.getLatestPosts().subscribe((allPosts) => {
      const filteredPosts = allPosts.slice(-3).reverse();
      this.posts = filteredPosts;
    })
    // console.log(this.posts)
  }
}
