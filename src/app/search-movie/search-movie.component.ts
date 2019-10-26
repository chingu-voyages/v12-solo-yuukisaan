import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../service/movies.service';
import { pipe } from 'rxjs';
import { mergeMap } from "rxjs/operators";
import Swal from 'sweetalert2'
import { Location } from '@angular/common';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _movieService: MoviesService, private _location: Location) { }

  movies;

  ngOnInit() {
    this._route.params.pipe(
      mergeMap(val => {
        return this._movieService.searchMovie(val.query)
      })
    ).subscribe(
      val => {
        this.movies = val;
        if (this.movies.length) {
          Swal.fire({
            title: `Search Successful, searched ${this.movies.length} movies`,
            type: "success"
          })
        } else {
          this._location.back();
          Swal.fire({
            title: "Your search returned no results",
            type: "error"
          })
        }

      })

  }

}


