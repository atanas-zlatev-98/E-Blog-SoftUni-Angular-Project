import { Component, OnInit } from '@angular/core';
import { TemplateComponent } from './template/template.component';
import { Post } from '../../types/post/post';
import { PostService } from '../../services/post/post.service';

@Component({
  selector: 'app-trending-now',
  standalone: true,
  imports: [TemplateComponent],
  templateUrl: './trending-now.component.html',
  styleUrl: './trending-now.component.scss'
})
export class TrendingNowComponent implements OnInit {
 constructor(private postService:PostService){

 }

 trendingPosts:Post[] =[];


 ngOnInit(): void {
   this.postService.getLatestPosts().subscribe((posts)=>{
    const filteredPosts = posts.slice(0,4);
    this.trendingPosts = filteredPosts;
   })
 }


}
