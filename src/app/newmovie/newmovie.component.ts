import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-newmovie',
  templateUrl: './newmovie.component.html',
  styleUrls: ['./newmovie.component.scss']
})
export class NewmovieComponent implements OnInit {

  newMovies;

  constructor(private _service: MoviesService) { }

  ngOnInit() {
    this._service.getCurrentMovies().subscribe(
      val => {
        this.newMovies = val
      }
    );
  }

}
