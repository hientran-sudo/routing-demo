import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseNavigatorComponent } from '../course-navigator/course-navigator.component';
import { Module } from '../models/module';
import { CourseService } from '../services/CourseService';

@Component({
  selector: 'app-addmodule',
  templateUrl: './addmodule.component.html',
  styleUrls: ['./addmodule.component.css'],
})
export class AddmoduleComponent implements OnInit {
  title: any;

  // selectedCourse = {
  //   modules: [] as any[],
  //   id: undefined,
  // };

  // modules: any[] | undefined;
  // selectedModule = {
  //   lessons: [] as any[],
  //   id: undefined,
  // };

  // selectedLesson = {
  //   id: undefined,
  // };

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    // this.courseService
    //   .findAllCourses()
    //   .then((courses) => (this.courses = courses));
  }
  // selectCourse(course: any) {
  //   this.selectedCourse = course;
  // }
  // selectModule(module: any) {
  //   this.selectedModule = module;
  // }
  // selectLesson(lesson: any) {
  //   this.selectedLesson = lesson;
  // }
  // addModule(){;
  //   this.courseService.addModule(this.module).subscribe(
  //     data => {
  //       console.log('response', data);
  //       this.router.navigateByUrl("/course-navigator");
  //     }
  //   )
  // }
  id = CourseNavigatorComponent.courseid;
  addModule(title: any) {
    const newmo = { title };

    //this.courseService.addModule(this.selectedCourse.id,newmo);
    this.courseService.addModule(this.id, newmo);
  }
}
