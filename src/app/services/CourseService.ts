import { Injectable, Input } from "@angular/core";

@Injectable()
export class CourseService {
    findAllCourses = () => fetch('http://localhost:8080/api/v1/courses').then(Response => Response.json())
}