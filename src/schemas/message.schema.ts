import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class EncryptedMessage extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  from: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  to: Types.ObjectId;

  @Prop({ required: true }) ciphertext: string;

  @Prop({ type: Object, required: true }) ratchetHeader: any;

  @Prop({ default: false }) delivered: boolean;
  @Prop({ default: false }) read: boolean;
}

export const EncryptedMessageSchema =
  SchemaFactory.createForClass(EncryptedMessage);
