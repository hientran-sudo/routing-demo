import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceClient {
  users = [
    { userId: 1, Username: 'hien', Password: 'abcd' },
    { userId: 2, Username: 'liz', Password: 'xyz' },
  ];

  courses = [{}];
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
  addCourse(Title: string) {
    this.courses.push({Title: Title});
  
  }
}