import { Component, OnInit } from '@angular/core';
import { Post } from '../../../types/post/post';
import { PostService } from '../../../services/post/post.service';
import { SingleTrendComponent } from './single-trend/single-trend.component';

@Component({
  selector: 'app-ai-trend',
  standalone: true,
  imports: [SingleTrendComponent],
  templateUrl: './ai-trend.component.html',
  styleUrl: './ai-trend.component.scss'
})
export class AiTrendComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((posts) => {
      this.posts = posts.filter(x=>x.postTrend ==='Artificial Intelligence').reverse();
    })
  }

}
