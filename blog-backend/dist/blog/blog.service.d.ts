import { Model } from 'mongoose';
import { Post } from './interfaces/post.interface';
import { CreatePostDTO } from 'src/dto/create-post.dto';
export declare class BlogService {
    private readonly postModel;
    constructor(postModel: Model<Post>);
    addPost(createPostDTO: CreatePostDTO): Promise<Post>;
    getPost(postID: any): Promise<Post>;
    getPosts(): Promise<Post[]>;
    editPost(postID: any, createPostDTO: CreatePostDTO): Promise<Post>;
    deletePost(postID: any): Promise<Post>;
}
