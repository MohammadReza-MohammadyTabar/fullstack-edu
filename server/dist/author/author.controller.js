"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorController = void 0;
const common_1 = require("@nestjs/common");
const author_service_1 = require("./author.service");
const add_author_dto_1 = require("./dto/add-author.dto");
let AuthorController = exports.AuthorController = class AuthorController {
    constructor(authorService) {
        this.authorService = authorService;
    }
    async getAuthors() {
        try {
            return this.authorService.getAll();
        }
        catch (error) {
            return { "msg": error.message };
        }
    }
    async addAuthor(author) {
        try {
            return this.authorService.add(author);
        }
        catch (error) {
            return error;
        }
    }
    async editAuthor({ id }, author) {
        try {
            return this.authorService.edit(id, author);
        }
        catch (error) {
            return error;
        }
    }
    async deleteAuthor({ id }) {
        try {
            return this.authorService.delete(id);
        }
        catch (error) {
            return error;
        }
    }
    async findByNameAuthor({ name }) {
        try {
            return this.authorService.findByName(name);
        }
        catch (error) {
            return error;
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "getAuthors", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_author_dto_1.AddAuthorDto]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "addAuthor", null);
__decorate([
    (0, common_1.Put)("/:id"),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, add_author_dto_1.AddAuthorDto]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "editAuthor", null);
__decorate([
    (0, common_1.Delete)("/:id"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "deleteAuthor", null);
__decorate([
    (0, common_1.Get)("/byname/:name"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "findByNameAuthor", null);
exports.AuthorController = AuthorController = __decorate([
    (0, common_1.Controller)('author'),
    __metadata("design:paramtypes", [author_service_1.AuthorService])
], AuthorController);
//# sourceMappingURL=author.controller.js.map