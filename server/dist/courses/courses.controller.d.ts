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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { CoursesService } from "./courses.service";
import { AddCourseDto } from "./dtos/add-course.dto";
export declare class CoursesController {
    private coursesService;
    constructor(coursesService: CoursesService);
    getAllCourses(): Promise<import("./schema/courses.schema").Courses[]>;
    addCourse(course: AddCourseDto): Promise<import("./schema/courses.schema").Courses | {
        msg: any;
    }>;
    deleteCourse(param: {
        id: string;
    }): Promise<{
        msg: any;
    }>;
    updateCourse(param: {
        id: string;
    }, course: AddCourseDto): Promise<import("./schema/courses.schema").Courses | {
        msg: any;
    }>;
    findByName(param: {
        name: string;
    }): Promise<(import("mongoose").Document<unknown, {}, import("./schema/courses.schema").Courses> & import("./schema/courses.schema").Courses & {
        _id: import("mongoose").Types.ObjectId;
    })[] | {
        msg: any;
    }>;
}
