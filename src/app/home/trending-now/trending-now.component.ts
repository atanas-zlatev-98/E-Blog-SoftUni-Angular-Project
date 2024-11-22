import { Component } from '@angular/core';
import { Posts } from '../../types';
import { TemplateComponent } from './template/template.component';

@Component({
  selector: 'app-trending-now',
  standalone: true,
  imports: [TemplateComponent],
  templateUrl: './trending-now.component.html',
  styleUrl: './trending-now.component.scss'
})
export class TrendingNowComponent {
  dummy_posts: Posts[] = [
    { id: '1', imageUrl: 'https://i.ytimg.com/vi/5JV_p0Stewo/maxresdefault.jpg',title:'EU could approve Apples tap and go payment proposal in',createdAt:'14 Jan, 2024',createdBy:'Elon Musk' },
    { id: '2', imageUrl: 'https://i.ytimg.com/vi/5JV_p0Stewo/maxresdefault.jpg',title:'EU could approve Apples tap and go payment proposal in',createdAt:'14 Jan, 2024',createdBy:'Elon Musk' },
    { id: '3', imageUrl: 'https://i.ytimg.com/vi/5JV_p0Stewo/maxresdefault.jpg',title:'EU could approve Apples tap and go payment proposal in',createdAt:'14 Jan, 2024',createdBy:'Elon Musk' },
    { id: '5', imageUrl: 'https://i.ytimg.com/vi/5JV_p0Stewo/maxresdefault.jpg',title:'EU could approve Apples tap and go payment proposal in',createdAt:'14 Jan, 2024',createdBy:'Elon Musk' },
  ];
}
