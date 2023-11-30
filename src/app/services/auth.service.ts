import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}
  login(uname: string, pword: string) {
    if (uname === 'nik' && pword === '123') {
      return 200;
    } else {
      return 403;
    }
  }
  logout() {
    this.router.navigate(['login']);
  }
  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
