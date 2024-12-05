import { Component, OnInit } from '@angular/core';
// import { Posts } from '../../types';
import { PostDetailsComponent } from './post-details/post-details.component';
import { Post } from '../../types/post/post';
import { PostService } from '../../services/post/post.service';

@Component({
  selector: 'app-all-posts',
  standalone: true,
  imports: [PostDetailsComponent],
  templateUrl: './all-posts.component.html',
  styleUrl: './all-posts.component.scss'
})
export class AllPostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((posts) => {
      this.posts = posts;
    })
  }

}
