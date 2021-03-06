import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { forkJoin, Observable } from 'rxjs';
@Injectable({
  providedIn: "root"
})
export class MoviesService {
  constructor(private http: HttpClient) { }



  /**
   * fetch a GET request from the movie api based on the function parameter passed
   * 
   * @param type current_movies - get the latest movies
   *             popular_movies - get popular movies 
   */
  getMovieType(type: String): Observable<object> {
    return this.http.get(
      `${environment.serverEndPoint}/movies/${type}`
    )
  }

  getCurrentMovies(page: string): Observable<Object> {
    const pageParams = new HttpParams().set("page", page);
    return this.http.get(
      `${environment.serverEndPoint}/movies/current_movies`, { params: pageParams }
    )
  }


  searchMovie(query: string): Observable<Object> {
    const searchParams = new HttpParams().set("query", query);
    return this.http.get(
      `${environment.serverEndPoint}/movies/search`, { params: searchParams }
    )
  }


  private getMovieTrailers(id) {
    return this.http.get(
      `${environment.serverEndPoint}/movies/trailers/${id}`
    )

  }

  private getMovieInfo(id) {
    return this.http.get(
      `${environment.serverEndPoint}/movies/movie_info/${id}`
    )
  }

  private getMovieCast(id) {
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
