import {IsString, IsArray, IsObject} from "class-validator";

export  class AddCourseDto{
    @IsString()
    name:string
    @IsObject()
    author:object
    @IsArray()
    tag:string[]
}
