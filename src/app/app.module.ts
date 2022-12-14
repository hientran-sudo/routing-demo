import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { StudenthelpComponent } from './studenthelp/studenthelp.component';

import { FormsModule } from '@angular/forms';
import { UserServiceClient } from './services/user.service.client';
import { CourseService } from './services/CourseService';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddmoduleComponent } from './addmodule/addmodule.component';
import { AddlessonComponent } from './addlesson/addlesson.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    StudenthelpComponent,
    CourseNavigatorComponent,
    AddcourseComponent,
    AddmoduleComponent,
    AddlessonComponent,
  ],
  imports: [
    routing,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserServiceClient, CourseService],
  bootstrap: [AppComponent],
})
export class AppModule { }
