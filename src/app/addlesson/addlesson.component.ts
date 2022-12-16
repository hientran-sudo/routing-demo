import { Component, OnInit } from '@angular/core';
import { CourseNavigatorComponent } from '../course-navigator/course-navigator.component';
import { CourseService } from '../services/CourseService';

@Component({
  selector: 'app-addlesson',
  templateUrl: './addlesson.component.html',
  styleUrls: ['./addlesson.component.css'],
})
export class AddlessonComponent implements OnInit {
  title: any;
  id = CourseNavigatorComponent.moduleid;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {}
  addLesson(title: any) {
    const newle = { title };
    this.courseService.addLesson(this.id, newle);
  }
}
