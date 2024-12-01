import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AllPostsComponent } from './posts/all-posts/all-posts.component';
import { PostDetailsComponent } from './posts/all-posts/post-details/post-details.component';
import { SinglePostComponent } from './posts/all-posts/single-post/single-post.component';
import { UserProfileComponent } from './auth/user/user-profile/user-profile.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },

    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'profile',component:UserProfileComponent},
    {
        path: 'posts',
        children: [
          { path: '', component: AllPostsComponent },
          {
            path: ':postId',
            component: SinglePostComponent,
            // canActivate: [AuthGuard],
          },
        ],
      },
];
