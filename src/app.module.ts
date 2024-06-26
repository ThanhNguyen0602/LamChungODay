import { Inject, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from 'process';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost:27017/'), 
  MongooseModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
      uri: configService.get<string>('MONGO_URL'),
    }),
    inject: [ConfigService],
  }),
  
  ConfigModule.forRoot({
    ignoreEnvFile: true
  }),
  
  UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
