import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user-service.service';
import { UserDetails } from '../../../types/user/user';
import { PostService } from '../../../services/post/post.service';
import { Post } from '../../../types/post/post';
import { UserPostsComponent } from './user-posts/user-posts.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [UserPostsComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit {

  userProfile: UserDetails = {
    _id: '',
    imgUrl: '',
    username: '',
    email: '',
    userSummary: '',
    themes: [],
  }

  userPosts: Post[]= [];

  constructor(private userService: UserService,private postService:PostService) {

  }


  ngOnInit(): void {
    const { _id, imgUrl, username, email, userSummary, themes } = this.userService.user!;
    this.userProfile = { _id, imgUrl, username, email, userSummary, themes };
    // // console.log(`userID: ${this.userId}`);

    this.postService.getAllPosts().subscribe((posts)=>{

      this.userPosts = posts.filter((x)=>x.userId._id===this.userProfile._id).reverse();
      

    })

  }
  
}
