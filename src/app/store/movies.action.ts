import { createAction, props } from '@ngrx/store';

export const loadListOfMovies = createAction('[movies] load list of movies');
export const loadListOfMoviesSuccess = createAction(
  '[movies] load list of movies success',
  props<{ response: any }>()
);
export const loadListOfMoviesFailure = createAction(
  '[movies] load list of movies failure',
  props<{ error: any }>()
);
