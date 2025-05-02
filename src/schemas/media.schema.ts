import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class EncryptedMedia extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true }) uploader: Types.ObjectId;
  @Prop({ required: true }) fileName: string;
  @Prop({ required: true }) mimeType: string;
  @Prop({ required: true }) encryptedUrl: string;
  @Prop() messageId?: Types.ObjectId;
}

export const EncryptedMediaSchema = SchemaFactory.createForClass(EncryptedMedia);
