import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({
  timestamps: true,
})
export class User {
  @Prop({ maxlength: 100 })
  name: string;
  @Prop({
    unique: true,
    required: true,
    match: /.+\@.+\..+/,
  })
  email: string;
  @Prop({ required: true, select: false })
  password: string;
  @Prop()
  country: string;
  @Prop({ default: 'Inactive' })
  state: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
