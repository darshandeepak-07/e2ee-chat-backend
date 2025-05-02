import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class KeyBundle extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ required: true }) signedPreKey: string;

  @Prop({ type: [String], default: [] }) oneTimePreKeys: string[];

  @Prop({ required: true }) signature: string;u
}

export const KeyBundleSchema = SchemaFactory.createForClass(KeyBundle);
