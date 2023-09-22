/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from "mongoose";
import { Author } from "./schema/author.schema";
import { AddAuthorDto } from "./dto/add-author.dto";
export declare class AuthorService {
    private authorModel;
    constructor(authorModel: Model<Author>);
    getAll(): Promise<Author[]>;
    add(author: AddAuthorDto): Promise<Author>;
    delete(id: string): Promise<Author[]>;
    edit(id: string, author: AddAuthorDto): Promise<Author[]>;
    findByName(name: string): Promise<(import("mongoose").Document<unknown, {}, Author> & Author & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
