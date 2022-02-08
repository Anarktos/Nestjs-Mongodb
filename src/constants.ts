import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();

export const DB_URI: string = configService.get('MONGODB_URI');
