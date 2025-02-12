import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Req } from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PostDTO } from 'src/dto/post.dto';
import { PostSchema } from 'src/models/post.schema';
import { PostsService } from 'src/service/posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async fetchAll(@Req() req: Request): Promise<Post[]> {
    return this.postsService.findAll();
  }

  @Get(':id')
  async fetchById(@Param('id') postId: string): Promise<Post> {
    return this.postsService.findOne(postId);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() postData: PostDTO, @Req() req: any): Promise<Post> {
    const { title, content, tags } = postData;
    return this.postsService.create(title, content, req.user.userId, tags);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async modify(@Param('id') postId: string, @Body() updatePayload: Partial<Post>): Promise<Post> {
    return this.postsService.update(postId, updatePayload);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') postId: string): Promise<Post> {
    return this.postsService.delete(postId);
  }
}