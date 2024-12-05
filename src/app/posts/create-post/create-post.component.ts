import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PostService } from '../../services/post/post.service';
import { UserService } from '../../services/user/user-service.service';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})
export class CreatePostComponent {

  constructor(private postService: PostService, private userService: UserService, private router: Router) { }

  formCreatePost = new FormGroup({
    postImageUrl: new FormControl('',[Validators.required]),
    postTitle: new FormControl('',[Validators.required,Validators.minLength(6)]),
    postTrend: new FormControl('',[Validators.required]),
    postReadTime: new FormControl('',[Validators.required]),
    postDescription: new FormControl('',[Validators.required,Validators.minLength(10)]),
  })

  createNewPost() {
    const { postImageUrl, postTitle, postTrend, postReadTime, postDescription } = this.formCreatePost.value;
    const createdBy = this.userService.user?.username!;
    this.postService.createPost(postImageUrl!, postTitle!, postTrend!, postReadTime!, postDescription!, createdBy).subscribe(() => {
      this.router.navigate(['/'])
    })

  }
}
