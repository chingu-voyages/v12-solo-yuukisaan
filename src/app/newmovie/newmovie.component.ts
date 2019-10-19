import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newmovie',
  templateUrl: './newmovie.component.html',
  styleUrls: ['./newmovie.component.scss']
})
export class NewmovieComponent implements OnInit {

  newMovies;

  constructor(private _service: MoviesService, private route: Router) { }

  ngOnInit() {
    this._service.getCurrentMovies().subscribe(
      val => {
        this.newMovies = val
      }
    );
  }

  onClick(id) {
    this.route.navigateByUrl(`movie/${id}`);
  }

}
