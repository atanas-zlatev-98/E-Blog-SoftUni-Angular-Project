import { Component } from '@angular/core';
import { Posts } from '../../types';
import { LatestNewsSingleComponent } from './latest-news-single/latest-news-single.component';

@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [LatestNewsSingleComponent],
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.scss'
})
export class LatestNewsComponent {
  dummy_posts: Posts[] = [
    { id: '1', imageUrl: 'https://i.ytimg.com/vi/5JV_p0Stewo/maxresdefault.jpg',title:'EU could approve Apples tap and go payment proposal in',createdAt:'14 Jan, 2024',createdBy:'Elon Musk',trend:"Technology",readTime: '3 Minutes',likes: 45},
    { id: '2', imageUrl: 'https://i.ytimg.com/vi/5JV_p0Stewo/maxresdefault.jpg',title:'EU could approve Apples tap and go payment proposal in',createdAt:'14 Jan, 2024',createdBy:'Elon Musk',trend:"Technology",readTime: '3 Minutes',likes: 45},
    { id: '3', imageUrl: 'https://i.ytimg.com/vi/5JV_p0Stewo/maxresdefault.jpg',title:'EU could approve Apples tap and go payment proposal in',createdAt:'14 Jan, 2024',createdBy:'Elon Musk',trend:"Technology",readTime: '3 Minutes',likes: 45},
    { id: '4', imageUrl: 'https://i.ytimg.com/vi/5JV_p0Stewo/maxresdefault.jpg',title:'EU could approve Apples tap and go payment proposal in',createdAt:'14 Jan, 2024',createdBy:'Elon Musk',trend:"Technology",readTime: '3 Minutes',likes: 45},
  ];
}
