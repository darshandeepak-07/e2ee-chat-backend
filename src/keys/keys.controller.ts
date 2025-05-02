import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { KeysService } from './keys.service';
import { UploadKeyBundleDto } from './dto/upload-key-bundle.dto';

@Controller('keys')
export class KeysController {
  constructor(private readonly keysService: KeysService) {}

  @Post('upload/:userId')
  upload(@Param('userId') userId: string, @Body() dto: UploadKeyBundleDto) {
    return this.keysService.uploadKeyBundle(userId, dto);
  }

  @Get(':userId')
  getBundle(@Param('userId') userId: string) {
    return this.keysService.getKeyBundle(userId);
  }
}
