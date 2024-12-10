import { Component } from '@angular/core';
import { Post } from '../../../types/post/post';
import { PostService } from '../../../services/post/post.service';
import { TechTrendSingleComponent } from "./tech-trend-single/tech-trend-single.component";

@Component({
  selector: 'app-tech-trend',
  standalone: true,
  imports: [TechTrendSingleComponent],
  templateUrl: './tech-trend.component.html',
  styleUrl: './tech-trend.component.scss'
})
export class TechTrendComponent {
  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((posts) => {
      this.posts = posts.filter(x=>x.postTrend ==='Technology').reverse();
    })
  }
}
