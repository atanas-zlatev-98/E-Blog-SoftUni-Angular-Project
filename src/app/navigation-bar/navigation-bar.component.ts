import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../services/user/user-service.service';
import { AuthUserInterface } from '../types/user/user';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {
  shown: boolean = false;
  
  constructor(private userService: UserService, private router: Router) { }
  userProfileImg: string | undefined;

  clickEvent() {
    this.shown = !this.shown;
  }

  get isLoggedIn(): boolean {
    this.userProfileImg = this.userService.user?.imgUrl;
    return this.userService.isLogged;
  }

  logout() {
    if (this.shown == true) {
      this.shown = false;
    }
    this.userService.logout().subscribe(() => {
      this.router.navigate(['/home']);
    });
  }

}
