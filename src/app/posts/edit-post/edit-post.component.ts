import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../../services/post/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post, PostData } from '../../types/post/post';

@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.scss'
})
export class EditPostComponent implements OnInit {

  formEditPost = new FormGroup({
    postImageUrl: new FormControl('', [Validators.required]),
    postTitle: new FormControl('', [Validators.required, Validators.minLength(6)]),
    postTrend: new FormControl('', [Validators.required]),
    postReadTime: new FormControl('', [Validators.required]),
    postDescription: new FormControl('', [Validators.required, Validators.minLength(10)]),
  })

  postData: PostData = {
    postImageUrl: '', postTitle: '', postTrend: '', postReadTime: '', postDescription: ''
  };

  constructor(private postService: PostService, private router: ActivatedRoute, private route: Router) {

  }

  editPost() {
    const postId = this.router.snapshot.params['postId'];

    if (this.formEditPost.invalid) {
      return;
    }

    this.postData = this.formEditPost.value as PostData;
    const { postImageUrl, postTitle, postTrend, postReadTime, postDescription } = this.postData;

    this.postService.editPost(postId, postImageUrl, postTitle, postTrend, postReadTime, postDescription).subscribe(() => {
      this.route.navigate([`/posts/${postId}`]);
    })

  }

  ngOnInit(): void {
    const postId = this.router.snapshot.params['postId'];

    this.postService.getPostByid(postId).subscribe((post) => {

      const { postImageUrl, postTitle, postTrend, postReadTime, postDescription } = post;

      this.formEditPost.setValue({
        postImageUrl,
        postTitle,
        postTrend,
        postReadTime,
        postDescription
      })

    })
  }
}
