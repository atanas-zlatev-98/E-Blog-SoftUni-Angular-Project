export interface AuthUserInterface {
    imgUrl: string;
    username: string;
    email: string;
    userSummary:string;
    password: string;
    _id: string;
    themes:[];
}

export interface UserDetails {
    _id:string;
    imgUrl:string;
    username: string;
    email: string;
    userSummary: string;
    themes:[];
}


export interface User {
    themes: string[];
    posts: string[];
    imgUrl:string;
    _id: string;
    email: string;
    username: string;
    password: string;
    created_at: string;
    updatedAt: string;
    __v: number;
  }