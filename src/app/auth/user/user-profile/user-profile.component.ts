import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user-service.service';
import { UserDetails } from '../../../types/user/user';
import { PostService } from '../../../services/post/post.service';
import { Post } from '../../../types/post/post';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
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

    // // this.userPosts = this.userService.user?.posts!;
    // this.postService.getAllPosts().subscribe((allPosts)=>{
    //   this.userPosts = allPosts.filter(x=>x.userId === this.userService.user?._id);
    // })
    // console.log(this.userPosts);
    
  }
  
}
