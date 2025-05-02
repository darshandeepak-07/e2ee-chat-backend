import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { KeyBundle, KeyBundleSchema } from '../schemas/key-bundle.schema';
import { KeysService } from './keys.service';
import { KeysController } from './keys.controller';
import { KeysRepository } from './keys.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: KeyBundle.name, schema: KeyBundleSchema }])],
  controllers: [KeysController],
  providers: [KeysService, KeysRepository],
  exports: [KeysService],
})
export class KeysModule {}
