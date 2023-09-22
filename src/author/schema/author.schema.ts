import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type authorDocument = HydratedDocument<Author>;

@Schema()
export class Author {
    @Prop()
    name: string;
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
