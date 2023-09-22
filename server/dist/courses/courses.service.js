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
exports.CoursesService = void 0;
const common_1 = require("@nestjs/common");
const courses_schema_1 = require("./schema/courses.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let CoursesService = exports.CoursesService = class CoursesService {
    constructor(courseModel) {
        this.courseModel = courseModel;
    }
    async getAll() {
        return this.courseModel.find();
    }
    async add(course) {
        try {
            return this.courseModel.create(course);
        }
        catch (error) {
            throw error;
        }
    }
    async deleteCourse(id) {
        try {
            return this.courseModel.findByIdAndDelete(id);
        }
        catch (error) {
            throw error;
        }
    }
    async editCourse(id, course) {
        try {
            return this.courseModel.findByIdAndUpdate(id, course);
        }
        catch (error) {
            throw error;
        }
    }
    async findByName(name) {
        try {
            return this.courseModel.find({ name: name });
        }
        catch (error) {
            throw error;
        }
    }
};
exports.CoursesService = CoursesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(courses_schema_1.Courses.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CoursesService);
//# sourceMappingURL=courses.service.js.map