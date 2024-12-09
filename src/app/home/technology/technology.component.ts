import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TechSectionContentComponent } from './tech-section-content/tech-section-content.component';
import { PostService } from '../../services/post/post.service';
import { Post } from '../../types/post/post';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [RouterLink, TechSectionContentComponent],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss'
})
export class TechnologyComponent implements OnInit {
  imgUrlMain: string = 'https://i.ytimg.com/vi/5JV_p0Stewo/maxresdefault.jpg';

  constructor(private postService: PostService) {

  }

  singlePost = {} as Post;
  featurePost = {} as Post;
  moreTechPosts: Post[] = [];
  
  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((posts) => {
      const findPost = posts.filter(x => x.postTrend == 'Technology').slice(-1);
      const morePosts = posts.filter(x=>x.postTrend == 'Technology').slice(-3);
      const feature = posts.filter(x=>x.postTrend == 'Technology').sort((a,b)=>b.userLikes.length - a.userLikes.length).slice(0,1);
      this.singlePost = findPost[0];
      this.moreTechPosts = morePosts;
      this.featurePost = feature[0];
    })
  }
}
