import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Response,Request} from "express";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use('*',(req:Request,res:Response)=>{
    console.log(req.method  ,req.path)
  })
  await app.listen(3200);
}
bootstrap();
