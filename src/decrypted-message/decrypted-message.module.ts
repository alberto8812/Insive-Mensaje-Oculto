import { Module } from '@nestjs/common';
import { DecryptedMessageService } from './decrypted-message.service';
import { DecryptedMessageController } from './decrypted-message.controller';

@Module({
  controllers: [DecryptedMessageController],
   providers: [DecryptedMessageService],
})
export class DecryptedMessageModule {}
