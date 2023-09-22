import { AuthorService } from "./author.service";
import { AddAuthorDto } from "./dto/add-author.dto";
export declare class AuthorController {
    private authorService;
    constructor(authorService: AuthorService);
    getAuthors(): Promise<import("./schema/author.schema").Author[] | {
        msg: any;
    }>;
    addAuthor(author: AddAuthorDto): Promise<any>;
    editAuthor({ id }: {
        id: string;
    }, author: AddAuthorDto): Promise<any>;
    deleteAuthor({ id }: {
        id: string;
    }): Promise<any>;
    findByNameAuthor({ name }: {
        name: string;
    }): Promise<any>;
}
