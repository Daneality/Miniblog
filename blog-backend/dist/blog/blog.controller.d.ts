import { CreatePostDTO } from 'src/dto/create-post.dto';
import { BlogService } from './blog.service';
export declare class BlogController {
    private blogService;
    constructor(blogService: BlogService);
    addPost(res: any, createPostDTO: CreatePostDTO): Promise<any>;
    getPost(res: any, postID: any): Promise<any>;
    getPosts(res: any): Promise<any>;
    editPost(res: any, postId: any, createPostDTO: CreatePostDTO): Promise<any>;
    deletePost(res: any, postID: any): Promise<any>;
}
