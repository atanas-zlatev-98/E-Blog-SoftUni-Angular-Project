import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user-service.service';
import { UserDetails } from '../../../types/user/user';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit {

  userProfile: UserDetails = {
    imgUrl: '',
    username: '',
    email: '',
    userSummary:'',
    posts: [],
  }

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    const {imgUrl,username,email,userSummary,posts} = this.userService.user!;
    this.userProfile = {imgUrl,username,email,userSummary,posts};
  }
}
