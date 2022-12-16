import { Injectable, Input } from "@angular/core";
import { Observable } from "rxjs";
import { Module } from "../course-navigator/course-navigator.component";
import { HttpClient } from '@angular/common/http';



@Injectable()
export class CourseService {
    
    // private getUrl: string = `http://courseservice-env.eba-wmimbkwx.us-east-1.elasticbeanstalk.com/api/v1/courses/4/modules`;
    // constructor(private _httpClient: HttpClient) { }
    
   
    findAllCourses = () => fetch('http://courseservice-env.eba-wmimbkwx.us-east-1.elasticbeanstalk.com/api/v1/courses').then(Response => Response.json())
    
    // async AddModule(courseId: any, module: any){
    //     await fetch(`http://courseservice-env.eba-wmimbkwx.us-east-1.elasticbeanstalk.com/api/v1/courses/${courseId}/modules`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8'
    //   },
    //   body: JSON.stringify(module)
    // });
    //}
    async addModule(id: any, module: any){
        //console.log("Add Module with course id : ",id," and Title : ",title)
        
        await fetch(`http://courseservice-env.eba-wmimbkwx.us-east-1.elasticbeanstalk.com/api/v1/courses/${id}/modules`,{
          method: 'POST',
              headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
              body: JSON.stringify(module)
        })
        alert("Module Added!");
      }
      async addLesson(id: any, lesson: any){
        //console.log("Add Module with course id : ",id," and Title : ",title)
        
        await fetch(`http://courseservice-env.eba-wmimbkwx.us-east-1.elasticbeanstalk.com/api/v1/courses/modules/${id}/lessons`,{
          method: 'POST',
              headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
              body: JSON.stringify(lesson)
        })
        alert("Lesson Added!");
      }
    // addModule(module: Module): Observable<Module> {
    //     return this._httpClient.post<Module>(this.getUrl, module);
    //   }

}
