import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { KeyBundle } from '../schemas/key-bundle.schema';
import { Model } from 'mongoose';
import { UploadKeyBundleDto } from './dto/upload-key-bundle.dto';

@Injectable()
export class KeysRepository {
  constructor(@InjectModel(KeyBundle.name) private model: Model<KeyBundle>) {}

  async upsertBundle(userId: string, dto: UploadKeyBundleDto) {
    return this.model.findOneAndUpdate(
      { userId },
      { ...dto, userId },
      { new: true, upsert: true }
    );
  }

  async findByUserId(userId: string) {
    return this.model.findOne({ userId }).exec();
  }
}
