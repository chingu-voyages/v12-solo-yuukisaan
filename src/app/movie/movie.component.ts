import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _service: MoviesService) { }
  movieTrailers;
  movieInfo;
  movieCast;
  ngOnInit() {
    let id;
    this.route.params.subscribe(val => {
      id = val.id;
    })

    this._service.getMovieDetails(id).subscribe(val => {
      const [trailers, cast, movieInfo] = val;
      this.movieInfo = movieInfo;
      this.movieTrailers = trailers;
      this.movieCast = cast;
    })
  }






}
