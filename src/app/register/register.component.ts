import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Username: any;
  Password: any;
  userId: any;

  constructor(private router: Router, private userService:UserServiceClient) { }

  ngOnInit(): void {}
  register(Username: any, Password: any) {
    console.log(Username, Password);
    const user=this.userService.addUser(Username,Password)
    //if (user != null) {
      //this.router.navigate(['profile',user.userId]);
    //}
    //else{
      console.log("Successful Register");          
    //}
  }

}
