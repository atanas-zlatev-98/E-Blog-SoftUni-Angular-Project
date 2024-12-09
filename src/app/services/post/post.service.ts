import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post, PostData } from '../../types/post/post';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  
  getLatestPosts() {
    return this.http.get<Post[]>(`/api/themes`);
  }

  getAllPosts() {
    return this.http.get<Post[]>(`/api/themes`);
  }

  createPost(postImageUrl: string, postTitle: string, postTrend: string, postReadTime: string, postDescription: string, createdBy: string) {
    const payload = { postImageUrl, postTitle, postTrend, postReadTime, postDescription, createdBy }
    return this.http.post<Post>('/api/themes', payload);

  }
  getPostByid(postId: string) {
    return this.http.get<Post>(`/api/themes/${postId}`);
  }

  editPost(postId: string, postImageUrl: string, postTitle: string, postTrend: string, postReadTime: string, postDescription: string) {
    return this.http.put<PostData>(`/api/themes/${postId}`, { postImageUrl, postTitle, postTrend, postReadTime, postDescription });
  }

  deletePost(postId: string) {
    return this.http.delete(`/api/themes/${postId}`)
  }

  likePost(postId: string) {
    return this.http.put(`/api/themes/${postId}/like`, {});
  }
  dislikePost(postId: string) {
    return this.http.put(`/api/themes/${postId}/dislike`, {});
  }

}
