import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceClient } from '../services/user.service.client';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  Title: any;

  constructor(private router: Router, private userService:UserServiceClient) { }

  ngOnInit(): void {}
  add(Title: any) {
    console.log(Title);
    const course=this.userService.addCourse(Title)
      console.log("Successful Added");          
  }

}
