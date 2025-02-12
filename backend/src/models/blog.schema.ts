import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Mongoose, Types } from 'mongoose';

export type PostDocument = Post & Document;

@Schema({ timestamps: true })
export class Post {
  @Prop({ required: true, unique: true })
  title: string;

  @Prop({ required: true, minlength: 20 })
  content: string;

  @Prop({type: Types.ObjectId, ref: 'User',  required: true })
  authorId: Types.ObjectId;

  @Prop({ default: [] })
  tags: string[];
}

export const PostSchema = SchemaFactory.createForClass(Post);
