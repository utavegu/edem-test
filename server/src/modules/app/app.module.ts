import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TripsModule } from '../trips/trips.module';
import {
  dbConnectionString,
  dbName,
  mongoLogin,
  mongoPassword,
} from 'src/config';

@Module({
  imports: [
    MongooseModule.forRoot(dbConnectionString, {
      user: mongoLogin,
      pass: mongoPassword,
      dbName: dbName,
    }),
    TripsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
