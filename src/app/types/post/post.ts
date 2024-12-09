import { User } from "../user/user";

export interface Post {
    createdBy: string;
    created_at: string;
    postDescription: string;
    postImageUrl: string;
    postReadTime: string;
    postTitle: string;
    postTrend: string;
    posts: string[];
    subscribers: string[];
    updatedAt: string;
    userId: User;
    userLikes: string[];
    __v: number;
    _id: string
}

export interface PostData {
    postImageUrl: string,
    postTitle: string,
    postTrend: string,
    postReadTime: string,
    postDescription: string,
}
