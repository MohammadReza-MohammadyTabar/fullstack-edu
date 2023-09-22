import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {Author, authorDocument} from "../../author/schema/author.schema";
export type courseDocument = HydratedDocument<Courses>;

@Schema()
export class Courses {
    @Prop()
    name: string;

    @Prop()
    author: string ;

    @Prop()
    tag: string[];
}

export const CourseSchema = SchemaFactory.createForClass(Courses);
