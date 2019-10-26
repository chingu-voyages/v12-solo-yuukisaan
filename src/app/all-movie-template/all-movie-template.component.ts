import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-all-movie-template',
  templateUrl: './all-movie-template.component.html',
  styleUrls: ['./all-movie-template.component.scss']
})
export class AllMovieTemplateComponent {



  constructor(private route: Router) { }


  @Input()
  movies: String;


  @Input()
  title: String;


  onClick(id) {
    this.route.navigateByUrl(`movie/${id}`);
  }
}
