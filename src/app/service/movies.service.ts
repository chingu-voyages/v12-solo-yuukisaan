import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { forkJoin } from 'rxjs';
@Injectable({
  providedIn: "root"
})
export class MoviesService {
  constructor(private http: HttpClient) { }

  getCurrentMovies() {
    return this.http.get(
      `${environment.serverEndPoint}/movies/current_movies`
    )
  }


  getMovieTrailers(id) {

    return this.http.get(
      `${environment.serverEndPoint}/movies/trailers/${id}`
    )

  }

  getMovieInfo(id) {
    return this.http.get(
      `${environment.serverEndPoint}/movies/movie_info/${id}`
    )
  }

  getMovieCast(id) {
    return this.http.get(
      `${environment.serverEndPoint}/movies/movie_cast/${id}`
    )
  }

  getMovieDetails(id) {
    return forkJoin([
      this.getMovieTrailers(id),
      this.getMovieCast(id),
      this.getMovieInfo(id)
    ])
  }



}
