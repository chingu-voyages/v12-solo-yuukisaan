import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newmovie',
  templateUrl: './newmovie.component.html',
  styleUrls: ['./newmovie.component.scss']
})
export class NewmovieComponent implements OnInit {
  constructor(private _service: MoviesService) { }

  movies;
  count = 1;
  ngOnInit() {
    this._service.getMovieType("current_movies").subscribe(
      val => {
        this.movies = val
      }
    );
  }

  onScroll() {
    this.count += 1
    this._service.getCurrentMovies(this.count.toString()).subscribe(
      val => {
        this.movies = this.movies.concat(val);
      }
    )
  }
}
