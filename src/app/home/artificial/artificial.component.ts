import { Component } from '@angular/core';
import { Posts } from '../../types';
import { AiTemplateComponent } from './ai-template/ai-template.component';

@Component({
  selector: 'app-artificial',
  standalone: true,
  imports: [AiTemplateComponent],
  templateUrl: './artificial.component.html',
  styleUrl: './artificial.component.scss'
})
export class ArtificialComponent {
  dummy_posts: Posts[] = [
    { id: '1', imageUrl: 'https://i.ytimg.com/vi/5JV_p0Stewo/maxresdefault.jpg',title:'EU could approve Apples tap and go payment proposal in',createdAt:'14 Jan, 2024',createdBy:'Elon Musk',trend:"Technology",readTime: '3 Minutes',likes: 45 },
    { id: '2', imageUrl: 'https://i.ytimg.com/vi/5JV_p0Stewo/maxresdefault.jpg',title:'EU could approve Apples tap and go payment proposal in',createdAt:'14 Jan, 2024',createdBy:'Elon Musk',trend:"Technology",readTime: '3 Minutes',likes: 45},
    { id: '3', imageUrl: 'https://i.ytimg.com/vi/5JV_p0Stewo/maxresdefault.jpg',title:'EU could approve Apples tap and go payment proposal in',createdAt:'14 Jan, 2024',createdBy:'Elon Musk',trend:"Technology",readTime: '3 Minutes',likes: 45},
  ];
}
