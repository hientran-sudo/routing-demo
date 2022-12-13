import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Course } from "../models/course";
@Injectable({
  providedIn: 'root'
})
export class UserServiceClient {
  private getUrl: string = "http://courseservice-env.eba-wmimbkwx.us-east-1.elasticbeanstalk.com/api/v1/courses";
  constructor(private _httpClient: HttpClient) { }
  users = [
    { userId: 1, Username: 'hien', Password: 'abcd' },
    { userId: 2, Username: 'liz', Password: 'xyz' },
  ];

  
  findUserByCrendentials(Username: String, Password: String) {
    for (let i = 0; i < this.users.length; i++) {
      const user = this.users[i];
      if (Username === user.Username && Password === user.Password) {
        return user;
      }
    }
    return null;
  }
  addUser(Username: string, Password: string) {
    this.users.push({ userId: this.users.length+1, Username: Username, Password: Password});
  
  }
  saveCourse(course: Course): Observable<Course> {
    return this._httpClient.post<Course>(this.getUrl, course);
  }
}