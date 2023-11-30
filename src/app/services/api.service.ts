import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private readonly http: HttpClient) {}
  getTrendingMovies() {
    return this.http.get(
      'http://localhost:4200/assets/data/trending-movies.json'
    );
  }
}
