import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PostService } from '../../../services/post/post.service';
import { Post } from '../../../types/post/post';
import { UserService } from '../../../services/user/user-service.service';
import { User } from '../../../types/user/user';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss'
})
export class SinglePostComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    private postService: PostService, 
    private userService: UserService, 
    private router: Router,
  ) { }

  currentPost = {} as Post;
  // postCreatorId: User | null = null;
  isPostLiked: boolean = false;
  singlePostId: User|string = '';

  get userId(): string {
    return this.userService.user?._id!;
  }

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  deletePost() {
    const postId = this.route.snapshot.params['postId'];
    this.postService.deletePost(postId).subscribe(() => {
      this.router.navigate(['/posts'])
    })

  }

  reloadCurrentRouter(){
    const currentRoute = this.route.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentRoute]);
    });
  }

  likePost() {
    const postId = this.route.snapshot.params['postId'];
    return this.postService.likePost(postId).subscribe(() => {
      this.isPostLiked = !this.isPostLiked;
      this.redirectTo(`/posts/${postId}`);
    })
   
  }

  dislikePost() {
    const postId = this.route.snapshot.params['postId'];
    return this.postService.dislikePost(postId).subscribe(() => {
      this.isPostLiked = !this.isPostLiked;
      this.redirectTo(`/posts/${postId}`);
    })
  }

  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([uri])});
  }

  ngOnInit(): void {

    const postId = this.route.snapshot.params['postId'];

    this.postService.getPostByid(postId).subscribe((post) => {
      
      this.currentPost = post;
      this.singlePostId = post.userId;
      
      if(post.userLikes.includes(this.userId)){
        this.isPostLiked = true;
      }else {
        this.isPostLiked = false;
      }
    })
  }

}
