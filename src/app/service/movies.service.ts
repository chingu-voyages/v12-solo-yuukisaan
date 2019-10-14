import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  movies: any[];

  getCurrentMovies(query: string) {
    return this.http.get(
      "https://movies-backend-0.herokuapp.com/movies/current_movies"
    );
  }
}
