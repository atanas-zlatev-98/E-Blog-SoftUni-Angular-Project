import { Component } from '@angular/core';
import { Posts } from '../../types';
import { AiTemplateComponent } from './ai-template/ai-template.component';
import { AiTemplateBelowComponent } from './ai-template-below/ai-template-below.component';

@Component({
  selector: 'app-artificial',
  standalone: true,
  imports: [AiTemplateComponent,AiTemplateBelowComponent],
  templateUrl: './artificial.component.html',
  styleUrl: './artificial.component.scss'
})
export class ArtificialComponent {
  dummy_posts: Posts[] = [
    { id: '1', imageUrl: 'https://i.ytimg.com/vi/5JV_p0Stewo/maxresdefault.jpg',title:'EU could approve Apples tap and go payment proposal in',createdAt:'14 Jan, 2024',createdBy:'Elon Musk',trend:"Technology",readTime: '3 Minutes',likes: 45 },
    { id: '2', imageUrl: 'https://i.ytimg.com/vi/5JV_p0Stewo/maxresdefault.jpg',title:'EU could approve Apples tap and go payment proposal in',createdAt:'14 Jan, 2024',createdBy:'Elon Musk',trend:"Technology",readTime: '3 Minutes',likes: 45},
    { id: '3', imageUrl: 'https://i.ytimg.com/vi/5JV_p0Stewo/maxresdefault.jpg',title:'EU could approve Apples tap and go payment proposal in',createdAt:'14 Jan, 2024',createdBy:'Elon Musk',trend:"Technology",readTime: '3 Minutes',likes: 45},
  ];
  dummy_posts_below: Posts[] = [
    { id: '1', imageUrl: 'https://i.ytimg.com/vi/5JV_p0Stewo/maxresdefault.jpg',title:'EU could approve Apples tap and go payment proposal in',createdAt:'14 Jan, 2024',createdBy:'Elon Musk',trend:"Technology",readTime: '3 Minutes',likes: 45 },
    { id: '2', imageUrl: 'https://i.ytimg.com/vi/5JV_p0Stewo/maxresdefault.jpg',title:'EU could approve Apples tap and go payment proposal in',createdAt:'14 Jan, 2024',createdBy:'Elon Musk',trend:"Technology",readTime: '3 Minutes',likes: 45},
    { id: '3', imageUrl: 'https://i.ytimg.com/vi/5JV_p0Stewo/maxresdefault.jpg',title:'EU could approve Apples tap and go payment proposal in',createdAt:'14 Jan, 2024',createdBy:'Elon Musk',trend:"Technology",readTime: '3 Minutes',likes: 45},
    { id: '3', imageUrl: 'https://i.ytimg.com/vi/5JV_p0Stewo/maxresdefault.jpg',title:'EU could approve Apples tap and go payment proposal in',createdAt:'14 Jan, 2024',createdBy:'Elon Musk',trend:"Technology",readTime: '3 Minutes',likes: 45},
  ];
}
