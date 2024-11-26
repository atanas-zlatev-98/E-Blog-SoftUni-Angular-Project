import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss'
})
export class SinglePostComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  currentPostId : string = '';

  ngOnInit(): void {
    const postId = this.route.snapshot.params['postId'];
    this.currentPostId = postId;
  }
 
  
}
