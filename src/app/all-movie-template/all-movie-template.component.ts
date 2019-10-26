import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-all-movie-template',
  templateUrl: './all-movie-template.component.html',
  styleUrls: ['./all-movie-template.component.scss']
})
export class AllMovieTemplateComponent implements OnInit {

  movies;

  constructor(private _service: MoviesService, private route: Router) { }


  @Input()
  movieType: String;


  @Input()
  title: String;

  ngOnInit() {
    this._service.getMovieType(this.movieType).subscribe(
      val => {
        this.movies = val
      }
    );
  }

  onClick(id) {
    this.route.navigateByUrl(`movie/${id}`);
  }
}
