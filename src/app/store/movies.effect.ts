import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ApiService } from '../services/api.service';
import { switchMap, withLatestFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesFeatureEffect {
  constructor(
    private readonly store: Store,
    private readonly actions$: Actions,
    private readonly http: HttpClient,
    private readonly apiService: ApiService
  ) {}

  //   public loadListOfMovies$ = createEffect(() => {
  //     this.actions$.pipe(ofType(this.apiService.getTrendingMovies),withLatestFrom(this.store.select(selectuserlist)),switchMap((actions)=>{
  //         const previousData=actions[1]
  //     }));
  //   });
}
