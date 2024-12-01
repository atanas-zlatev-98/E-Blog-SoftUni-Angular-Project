export interface AuthUserInterface {
    imgUrl: string;
    username: string;
    email: string;
    userSummary:string;
    password: string;
    id: string;
    posts:[];
}

export interface UserDetails {
    imgUrl:string;
    username: string;
    email: string;
    userSummary: string;
    posts:[];
}
