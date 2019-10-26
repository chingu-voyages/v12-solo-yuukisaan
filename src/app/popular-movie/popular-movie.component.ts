import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-popular-movie',
  templateUrl: './popular-movie.component.html',
  styleUrls: ['./popular-movie.component.scss']
})
export class PopularMovieComponent implements OnInit {
  movies;
  constructor(private _service: MoviesService) { }

  ngOnInit() {
    this._service.getMovieType("current_movies").subscribe(
      val => {
        this.movies = val
      }
    );
  }

}
