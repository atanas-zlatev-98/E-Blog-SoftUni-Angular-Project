import { Injectable } from '@angular/core';
import { AuthUserInterface } from '../../types/user/user';
import { BehaviorSubject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService{
  private user$$ = new BehaviorSubject<AuthUserInterface | null>(null);
  private user$ = this.user$$.asObservable();

  user: AuthUserInterface | null = null;

  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }

  get userId():String {
    return this.user?._id!;
  }
  
  constructor(private http: HttpClient,private router:Router) {
    this.user$.subscribe((user) => {
      this.user = user;
    });

  }

  login(email: string, password: string) {
    return this.http
      .post<AuthUserInterface>('/api/login', { email, password })
      .pipe(tap(user => this.user$$.next(user)));

  }

  register(imgUrl:string,username: string, email: string, userSummary: string, password: string) {

    return this.http
      .post<AuthUserInterface>('/api/register', { imgUrl,username, email,userSummary, password})
      .pipe(tap(user => this.user$$.next(user)));

  }

  logout() {
    return this.http.post('/api/logout', {})
      .pipe(tap(user => this.user$$.next(null)));
  }


  getUserInfo() {
    return this.http
      .get<AuthUserInterface>('/api/users/profile')
      .pipe(tap(user => this.user$$.next(user)));
  }

}
