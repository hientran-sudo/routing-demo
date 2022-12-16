import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Module } from '../models/module';
import { CourseService } from '../services/CourseService';


@Component({
  selector: 'app-addmodule',
  templateUrl: './addmodule.component.html',
  styleUrls: ['./addmodule.component.css']
})
export class AddmoduleComponent implements OnInit {


  courses : any[] | undefined;
  module: Module = new Module();
  
  title:any;
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
  // addModule(){;
  //   this.courseService.addModule(this.module).subscribe(
  //     data => {
  //       console.log('response', data);
  //       this.router.navigateByUrl("/course-navigator");
  //     }
  //   )
  // }
  addModule(title:string){
    this.courseService.addModule(this.selectedCourse.id,title);

  }
}


