export interface Post {
    _id: string;
    userId: string;
    username: string;
    userImg: string;
    title: string;
    imgUrl: string;
    desc: string;
    tags: string[];
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface Posts {
    message: string;
    success: boolean;
    posts: Post[]
}