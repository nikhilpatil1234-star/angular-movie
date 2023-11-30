import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router,
    private auth: AuthService,
    private http: HttpClient
  ) {}
  ngOnInit() {}
  goToHome() {
    this.router.navigate(['home']);
  }
  logout() {
    localStorage.removeItem('token');
    this.auth.logout();
  }
  gotoResolve() {
    this.router.navigate(['resolve']);
  }
}
