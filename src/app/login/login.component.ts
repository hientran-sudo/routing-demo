import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  Username: any;
  Password: any;

  constructor(private router: Router, private userService:UserServiceClient) {}

  ngOnInit(): void {}

  login(Username: any, Password: any) {
    console.log(Username, Password);
    const user=this.userService.findUserByCrendentials(Username,Password)
    if (user != null) {
      this.router.navigate(['profile',user.userId]);
    }
    else{
      console.log("INVALID CREDENTIALS");
      //document.write("INVALID CREDENTIALS");
    }
  }
}

