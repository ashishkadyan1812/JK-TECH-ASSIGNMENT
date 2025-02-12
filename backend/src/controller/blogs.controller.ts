import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Req } from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PostDTO } from 'src/dto/post.dto';
import { Post } from 'src/models/post.schema';
import { PostsService } from 'src/service/posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async getAllPosts(@Req() req: Request): Promise<Post[]> {
    return await this.postsService.findAll();
  }

  @Get(':id')
  getPost(@Param('id') id: string): Promise<Post> {
    return this.postsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  createPost(@Body() body: PostDTO, @Req() req: any): Promise<Post> {
    // console.log(req.user);
    return this.postsService.create(body.title, body.content, req.user.userId, body.tags);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updatePost(@Param('id') id: string, @Body() updateData: Partial<Post>): Promise<Post> {
    return this.postsService.update(id, updateData);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deletePost(@Param('id') id: string): Promise<Post> {
    return this.postsService.delete(id);
  }
}
