import { PartialType } from '@nestjs/mapped-types';
import { CreateDecryptedMessageDto } from './create-decrypted-message.dto';

export class UpdateDecryptedMessageDto extends PartialType(CreateDecryptedMessageDto) {}
