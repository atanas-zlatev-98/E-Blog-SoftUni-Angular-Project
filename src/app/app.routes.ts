import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AllPostsComponent } from './posts/all-posts/all-posts.component';
import { PostDetailsComponent } from './posts/all-posts/post-details/post-details.component';
import { SinglePostComponent } from './posts/all-posts/single-post/single-post.component';
import { UserProfileComponent } from './auth/user/user-profile/user-profile.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { Top10Component } from './posts/top-10/top-10.component';
import { AuthGuard } from './auth/guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },

    {path:'login',component:LoginComponent,canActivate:[]},
    {path:'register',component:RegisterComponent,canActivate:[]},
    {path:'profile',component:UserProfileComponent,canActivate:[AuthGuard]},
    {
        path: 'posts',
        children: [
          { path: '', component: AllPostsComponent },
          {
            path: ':postId',
            component: SinglePostComponent,
          },
          {path:'edit/:postId',component:EditPostComponent,canActivate:[AuthGuard]}
        ],
      },
      {path:'create-post',component:CreatePostComponent,canActivate:[AuthGuard]},
      {path:'top-10',component:Top10Component},
];
