import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../services/CourseService';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})

export class CourseNavigatorComponent implements OnInit {
  courses : any[] | undefined;
  title:any;

  selectedCourse={
    modules:[] as any[],
    id: undefined,
  };
  modules : any[] | undefined;
  selectedModule={
    lessons:[] as any[],
    id:undefined
  };

  selectedLesson={
    id:undefined
  };




  constructor(private router: Router,private courseService : CourseService) { }

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
  // addModule(title:any){
  //   const newmodule = {title};
  //   this.courseService.AddModule(this.selectedCourse.id,newmodule);

  // }
  // addModule(){;
  //   this.courseService.addModule(this.module).subscribe(
  //     data => {
  //       console.log('response', data);
  //       this.router.navigateByUrl("/course-navigator");
  //     }
  //   )
    

  }
export class Module{
	title:string | undefined;
}
