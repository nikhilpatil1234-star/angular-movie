import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  errMessage = '';
  eve: any;

  constructor(private auth: AuthService, private router: Router) {}
  ngOnInit(): void {}
  logIn(event: any) {
    console.log('event', event);
    if (this.username.length === 0) {
      this.errMessage = 'user name is required';
    } else if (this.password.length === 0) {
      this.errMessage = 'password is required';
    } else {
      this.errMessage = '';
      let res = this.auth.login(this.username, this.password);
      if (res === 200) {
        this.router.navigate(['home']);
        localStorage.setItem('token', `${this.username}`);
      } else {
        this.errMessage = 'invalid credentials';
      }
    }
  }
  domLog() {
    console.log('event');
  }
}
