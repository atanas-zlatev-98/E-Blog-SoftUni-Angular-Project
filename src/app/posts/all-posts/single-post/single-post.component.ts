import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PostService } from '../../../services/post/post.service';
import { Post } from '../../../types/post/post';
import { UserService } from '../../../services/user/user-service.service';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss'
})
export class SinglePostComponent implements OnInit {

  constructor(private route: ActivatedRoute, private postService: PostService, private userService: UserService,private router:Router) { }

  currentPost = {} as Post;
  // postCreatorId: User | null = null;

  get userId(): string {
    return this.userService.user?._id!;
  }

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  deletePost(){
    const postId = this.route.snapshot.params['postId'];
    this.postService.deletePost(postId).subscribe(()=>{
      this.router.navigate(['/posts'])
    })
  }

  ngOnInit(): void {
    const postId = this.route.snapshot.params['postId'];

    this.postService.getPostByid(postId).subscribe((post) => {
      console.log(post);
      this.currentPost = post;
    })

  }
}
