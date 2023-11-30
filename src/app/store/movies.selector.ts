import { createFeatureSelector } from '@ngrx/store';
import { MovieFeatureKey, MoviesFeatureState } from './movies.store';

export const MovieState =
  createFeatureSelector<MoviesFeatureState>(MovieFeatureKey);
