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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    StudenthelpComponent,
    CourseNavigatorComponent,
    AddcourseComponent
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
