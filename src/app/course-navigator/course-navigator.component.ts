import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/CourseService';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {
  courses : any[] | undefined;
  selectedCourse={
    modules:[] as any[],
    id:undefined
  };
  modules : any[] | undefined;
  selectedModule={
    lessons:[] as any[],
    id:undefined
  };

  selectedLesson={
    id:undefined
  };

  constructor(private courseService : CourseService) { }

  ngOnInit(): void {
    this.courseService.findAllCourses().then(courses=>this.courses=courses)
  }
  selectCourse(course:any){
    this.selectedCourse=course;
  }
  selectModule(module:any){
    this.selectedModule=module;
  }
  selectLesson(lesson:any){
    this.selectedLesson=lesson;
  }
}
