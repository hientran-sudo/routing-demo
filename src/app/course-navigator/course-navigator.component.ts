import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../services/CourseService';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css'],
})
export class CourseNavigatorComponent implements OnInit {
  courses: any[] | undefined;
  title: any;
  public static courseid: any;
  public static moduleid: any;

  selectedCourse = {
    modules: [] as any[],
    id: undefined,
  };
  modules: any[] | undefined;
  selectedModule = {
    lessons: [] as any[],
    id: undefined,
  };

  selectedLesson = {
    id: undefined,
  };
  constructor(private router: Router, private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService
      .findAllCourses()
      .then((courses) => (this.courses = courses));
  }
  selectCourse(course: any) {
    this.selectedCourse = course;
    CourseNavigatorComponent.courseid = course.id;
  }
  selectModule(module: any) {
    this.selectedModule = module;
    CourseNavigatorComponent.moduleid = module.id;
  }
  selectLesson(lesson: any) {
    this.selectedLesson = lesson;
  }
}
export class Module {
  title: string | undefined;
}
