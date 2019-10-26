import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _movieService: MoviesService) { }

  movies;

  ngOnInit() {
    this._route.params.subscribe(val => {
      let query = val.query;

      this._movieService.searchMovie(query).subscribe(val => {
        this.movies = val;
      })
    })
  }

}
