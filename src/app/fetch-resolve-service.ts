import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
@Injectable()
export class resolveService implements Resolve<any> {
  constructor(private http: HttpClient) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {}

  getMethod() {
    return this.http.get(
      'https://jsonplaceholder.typicode.com/photos?_limit=100'
    );
    // .subscribe((x: any) => {
    //     return x;
    //   });
  }
}
