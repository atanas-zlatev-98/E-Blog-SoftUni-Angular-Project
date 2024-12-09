import { Component } from '@angular/core';
import { PostService } from '../../services/post/post.service';
import { Post } from '../../types/post/post';
import { TopTenSingleComponent } from './top-ten-single/top-ten-single.component';

@Component({
  selector: 'app-top-10',
  standalone: true,
  imports: [TopTenSingleComponent],
  templateUrl: './top-10.component.html',
  styleUrl: './top-10.component.scss'
})
export class Top10Component {
  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((posts) => {
      this.posts = posts.sort((a,b)=>b.userLikes.length - a.userLikes.length).slice(0,10);
    })
  }
}
