import { Module } from '@nestjs/common';
import { DecryptedMessageModule } from './decrypted-message/decrypted-message.module';

@Module({
  imports: [DecryptedMessageModule],
})
export class AppModule {}
