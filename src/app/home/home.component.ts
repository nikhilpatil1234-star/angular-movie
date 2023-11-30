import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public trendingMovie: any;
  public popularMovies: any;
  public allTime: any;
  public firstName: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private api: ApiService
  ) {}
  ngOnInit(): void {
    // this.getTrendingMovies();
    this.getPopularMovies();
    this.getAllTime();
  }
  FetchDataToDisplay() {
    return this.api.getTrendingMovies().subscribe((data: any) => {
      this.trendingMovie = data;
    });
  }

  getTrendingMovies() {
    this.http
      .get('http://localhost:4200/assets/data/trending-movies.json')
      .subscribe((data: any) => {
        this.trendingMovie = data;
      });
  }
  getPopularMovies() {
    this.http
      .get('http://localhost:4200/assets/data/popular-movies.json')
      .subscribe((data: any) => {
        this.popularMovies = data;
      });
  }
  getAllTime() {
    this.http
      .get('http://localhost:4200/assets/data/theatre-movies.json')
      .subscribe((data) => {
        this.allTime = data;
      });
  }
  goToMovie(type: string, id: string) {
    this.router.navigate(['movie', type, id]);
  }
  Search() {
    if (this.firstName === '') {
      this.ngOnInit();
    } else {
      this.trendingMovie = this.trendingMovie.filter((resp: any) => {
        return resp.name.toLowerCase().includes(this.firstName.toLowerCase());
      });
    }
  }
}
