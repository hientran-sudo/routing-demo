import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { StudenthelpComponent } from './studenthelp/studenthelp.component';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { AddcourseComponent } from './addcourse/addcourse.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'profile/:userId', component:ProfileComponent},
  {path: 'studenthelp', component:StudenthelpComponent},
  {path: 'course-navigator', component:CourseNavigatorComponent},
  {path:'addcourse', component:AddcourseComponent},
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


