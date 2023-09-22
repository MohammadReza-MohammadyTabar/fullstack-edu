import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Response, Request, NextFunction} from "express";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use('*',(req:Request,res:Response,next:NextFunction)=>{
    console.log(req.method  ,req.originalUrl)
    next()
  })
  await app.listen(3200);
}
bootstrap();
