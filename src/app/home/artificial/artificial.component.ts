import { Component, OnInit } from '@angular/core';
import { AiTemplateComponent } from './ai-template/ai-template.component';
import { AiTemplateBelowComponent } from './ai-template-below/ai-template-below.component';
import { Post } from '../../types/post/post';
import { PostService } from '../../services/post/post.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-artificial',
  standalone: true,
  imports: [AiTemplateComponent,AiTemplateBelowComponent,RouterLink],
  templateUrl: './artificial.component.html',
  styleUrl: './artificial.component.scss'
})
export class ArtificialComponent implements OnInit{


  constructor(private postService:PostService){}

  aiTopPosts: Post[] = [];
  aiBottomPosts: Post[] = [];

ngOnInit(): void {
  
  this.postService.getAllPosts().subscribe((posts)=>{
    this.aiTopPosts = posts.filter(x=>x.postTrend=='Artificial Intelligence').slice(0,3);
    this.aiBottomPosts = posts.filter(x=>x.postTrend == 'Artificial Intelligence').slice(-4).reverse();
  })

}
}
