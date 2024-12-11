import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AllPostsComponent } from './posts/all-posts/all-posts.component';
import { SinglePostComponent } from './posts/all-posts/single-post/single-post.component';
import { UserProfileComponent } from './auth/user/user-profile/user-profile.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { Top10Component } from './posts/top-10/top-10.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { TrendsComponent } from './posts/trends/trends.component';
import { CryptoTrendComponent } from './posts/trends/crypto-trend/crypto-trend.component';
import { AiTrendComponent } from './posts/trends/ai-trend/ai-trend.component';
import { TechTrendComponent } from './posts/trends/tech-trend/tech-trend.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';

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
      {path:'trends',children:[
        {path:'',component:TrendsComponent},
        {path:'Crypto',component:CryptoTrendComponent},
        {path:'Artificial-Intelligence',component:AiTrendComponent},
        {path:'Technology',component:TechTrendComponent},
        
      ]},
      {path:'404',component:PageNotFoundComponent},
      {path:'**',redirectTo:'/404'}
];
