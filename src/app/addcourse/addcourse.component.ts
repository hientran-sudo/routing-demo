import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../models/course';
import { CourseService } from '../services/CourseService';
import { UserServiceClient } from '../services/user.service.client';


@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  course: Course = new Course();

  constructor(private router: Router, private userService:UserServiceClient) { }

  ngOnInit(): void {}
  saveCourse() {
    this.userService.saveCourse(this.course).subscribe(
      data => {
        console.log('response', data);
        this.router.navigateByUrl("/course-navigator");
      }
    )
  }
  
}
