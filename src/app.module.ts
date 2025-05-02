import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { KeysModule } from './keys/keys.module';

@Module({
  imports: [UsersModule, KeysModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
