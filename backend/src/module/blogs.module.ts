import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogsService } from '../service/blogs.service';
import { Blog, BlogSchema } from '../models/blog.schema';
import { BlogsController } from 'src/controller/blogs.controller';
import { UsersModule } from './users.module';
import { User } from 'src/models/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Blog.name, schema: BlogSchema }]),
    UsersModule,
  ],
  controllers: [BlogsController],
  providers: [BlogsService],
})
export class BlogsModule {}
