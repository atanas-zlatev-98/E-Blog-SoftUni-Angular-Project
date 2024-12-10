import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post/post.service';
import { Post } from '../../types/post/post';
import { TrendTemplateComponent } from './trend-template/trend-template.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-trends',
  standalone: true,
  imports: [TrendTemplateComponent,RouterLink],
  templateUrl: './trends.component.html',
  styleUrl: './trends.component.scss'
})
export class TrendsComponent implements OnInit{

  constructor(private postService:PostService){

  }

  aiPosts: Post[] = [];
  techPosts: Post[] = [];
  cryptoPosts: Post[] = [];
 

ngOnInit(): void {
  
  this.postService.getAllPosts().subscribe((posts)=>{
    this.aiPosts = posts.filter(x=>x.postTrend=='Artificial Intelligence').reverse().slice(0,3);
    this.techPosts = posts.filter(x=>x.postTrend=='Technology').reverse().slice(0,3);
    this.cryptoPosts = posts.filter(x=>x.postTrend=='Crypto').reverse().slice(0,3);
  })

}
}
