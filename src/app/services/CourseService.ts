import { Injectable, Input } from "@angular/core";

@Injectable()
export class CourseService {
    findAllCourses = () => fetch('http://courseservice-env.eba-wmimbkwx.us-east-1.elasticbeanstalk.com/api/v1/courses').then(Response => Response.json())
}