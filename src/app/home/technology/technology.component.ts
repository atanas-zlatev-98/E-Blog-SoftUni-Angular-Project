import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TechSectionContentComponent } from './tech-section-content/tech-section-content.component';
import { Posts } from '../../types';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [RouterLink,TechSectionContentComponent],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss'
})
export class TechnologyComponent {
imgUrlMain: string = 'https://i.ytimg.com/vi/5JV_p0Stewo/maxresdefault.jpg';
dummy_posts: Posts[] = [
  { id: '1', imageUrl: 'https://i.ytimg.com/vi/5JV_p0Stewo/maxresdefault.jpg',title:'EU could approve Apples tap and go payment proposal in',createdAt:'14 Jan, 2024',createdBy:'Elon Musk',trend:"Technology",readTime: '3 Minutes',likes: 45 },
  { id: '2', imageUrl: 'https://i.ytimg.com/vi/5JV_p0Stewo/maxresdefault.jpg',title:'EU could approve Apples tap and go payment proposal in',createdAt:'14 Jan, 2024',createdBy:'Elon Musk',trend:"Technology",readTime: '3 Minutes',likes: 45},
  { id: '3', imageUrl: 'https://i.ytimg.com/vi/5JV_p0Stewo/maxresdefault.jpg',title:'EU could approve Apples tap and go payment proposal in',createdAt:'14 Jan, 2024',createdBy:'Elon Musk',trend:"Technology",readTime: '3 Minutes',likes: 45},
];
}
