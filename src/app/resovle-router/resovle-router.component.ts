import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { resolveService } from '../fetch-resolve-service';

@Component({
  selector: 'app-resovle-router',
  templateUrl: './resovle-router.component.html',
  styleUrls: ['./resovle-router.component.scss'],
})
export class ResovleRouterComponent implements OnInit {
  images: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fetchServ: resolveService
  ) {}
  ngOnInit(): void {
    // this.fetchData();
    this.fetchServ.getMethod().subscribe(res => {
      console.log(res,'res');
    })
  }

  fetchData() {
    return (this.images = this.activatedRoute.snapshot.data['data']);
  }
  // fetchData() {
  //   this.http
  //     .get('https://jsonplaceholder.typicode.com/photos?_limit=100')
  //     .subscribe((x: any) => {
  //       setTimeout(() => {
  //         this.images = x;
  //       }, 500);
  //     });
  // }
}
