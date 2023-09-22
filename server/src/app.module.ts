import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorModule } from './author/author.module';
import {ConfigModule} from "@nestjs/config";
import * as process from "process";


@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_DB),CoursesModule,AuthorModule,ConfigModule.forRoot({
    isGlobal: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
