import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsService } from '../service/posts.service';
import { Post, PostSchema } from '../models/post.schema';
import { PostsController } from 'src/controller/posts.controller';
import { UsersModule } from './users.module';
import { User } from 'src/models/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    UsersModule,
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
