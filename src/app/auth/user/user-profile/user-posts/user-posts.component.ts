import { Component, Inject, Input } from '@angular/core';
import { Post } from '../../../../types/post/post';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PostService } from '../../../../services/post/post.service';

@Component({
  selector: 'app-user-posts',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-posts.component.html',
  styleUrl: './user-posts.component.scss'
})
export class UserPostsComponent {
  @Input('post') post: Post | null = null;

  constructor(private postService:PostService,private route:ActivatedRoute,private router:Router){}

  deleteUserPost(postId:string = '') {
  
    this.postService.deletePost(postId).subscribe(() => {
      this.router.navigate(['/profile'])
    })

  }
}
