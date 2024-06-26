import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movies.model';
import { Observable, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesApiService {
  url =
    'https://online-movie-database.p.rapidapi.com/title/v2/find?title={title}&limit=20&paginationKey=0&sortArg=moviemeter%2Casc';

  constructor(private http: HttpClient) {}

  getMovies(title: string): Observable<Movie[]> {
    return this.http
      .get<{ results: Movie[] }>(this.replacePlaceholders(this.url, { title }))
      .pipe(
        map(({ results }) => {
          if (!(results?.length > 0)) {
            throw new Error('Error: Movies not found');
          }
          return results;
        }),
      );
  }

  replacePlaceholders(
    urlTemplate: string,
    replacements: { [key: string]: string },
  ): string {
    let url = urlTemplate;
    for (const key in replacements) {
      url = url.replace(`{${key}}`, replacements[key]);
    }
    return url;
  }
}
