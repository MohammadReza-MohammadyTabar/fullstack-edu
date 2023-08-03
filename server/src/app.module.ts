import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorModule } from './author/author.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/elearn'),CoursesModule,AuthorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
