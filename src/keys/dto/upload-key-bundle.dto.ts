import { IsArray, IsString } from 'class-validator';

export class UploadKeyBundleDto {
  @IsString()
  signedPreKey: string;

  @IsArray()
  oneTimePreKeys: string[];

  @IsString()
  signature: string;
}
