import { Injectable, NotFoundException } from '@nestjs/common';
import { KeysRepository } from './keys.repository';
import { UploadKeyBundleDto } from './dto/upload-key-bundle.dto';

@Injectable()
export class KeysService {
  constructor(private readonly repo: KeysRepository) {}

  uploadKeyBundle(userId: string, dto: UploadKeyBundleDto) {
    return this.repo.upsertBundle(userId, dto);
  }

  async getKeyBundle(userId: string) {
    const bundle = await this.repo.findByUserId(userId);
    if (!bundle) throw new NotFoundException('Key bundle not found');
    return {
      signedPreKey: bundle.signedPreKey,
      oneTimePreKey: bundle.oneTimePreKeys.pop(), // consume one prekey
      signature: bundle.signature,
    };
  }
}
