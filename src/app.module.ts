import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import 'dotenv/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.DB_URI), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
