import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from '../models/post.schema';
import { Mode } from 'fs';
import { User, UserDocument } from 'src/models/user.schema';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>,
              @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async findAll(): Promise<any> {
    const posts : Post[] = await this.postModel.find();
    return {
      code: true,
      message: 'Successfully fetched all the posts',
      totalCount: posts.length,
      posts: posts,
    }
  }

  async findOne(id: string): Promise<any> {
    const post: Post = await this.postModel.findById(id);
    if(!post) throw new HttpException('Post not found with this ID', HttpStatus.NOT_FOUND);
    return {
      code: true,
      message: 'Successfully fetched the post',
      post: post,
    }
  }

  async create(title: string, content: string, authorId: string, tags: string[]): Promise<any> {
    const newPost = await this.postModel.create({ title, content, tags, authorId });

    await this.userModel.findByIdAndUpdate(authorId, {
      $push: { posts: newPost._id },
    });
    return {
      code: true,
      message: 'Successfully created the post',
      post: newPost,
    }
  }

  async update(id: string, updateData: Partial<Post>): Promise<any> {
    const updatedPost = await this.postModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
    if (!updatedPost) throw new HttpException('Post not found with this ID', HttpStatus.NOT_FOUND);
    return {
      code: true,
      message: 'Successfully updated the post',
      post: updatedPost,
    };
  }

  async delete(id: string): Promise<any> {
    const deletedPost = await this.postModel.findByIdAndDelete(id).exec();
    if (!deletedPost) throw new HttpException('Post not found with this ID', HttpStatus.NOT_FOUND);
    return {
      code: true,
      message: 'Successfully deleted the post',
      post: deletedPost,
    };
  }
}
