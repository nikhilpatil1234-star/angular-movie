export const MovieFeatureKey = 'feature-movie';
export class MoviesFeatureState {
  list: any;
  movie: any;
  status: 'pending' | 'loading' | 'success' | 'error' = 'pending';
  error: any;
}
