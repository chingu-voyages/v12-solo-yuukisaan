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
  ngOnInit() {
    this._service.getMovieType("current_movies").subscribe(
      val => {
        this.movies = val
      }
    );
  }
}
