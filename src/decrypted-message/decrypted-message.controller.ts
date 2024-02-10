import { Controller, Get, Param } from '@nestjs/common';
import { DecryptedMessageService } from './decrypted-message.service';


@Controller('decrypted-message')
export class DecryptedMessageController {
  constructor(private readonly decryptedMessageService: DecryptedMessageService) {}


  @Get()
  findAll() {
    return this.decryptedMessageService.findKey();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.decryptedMessageService.findMessage(+id);
  }


}
