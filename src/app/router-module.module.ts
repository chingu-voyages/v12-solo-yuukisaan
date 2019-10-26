import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { NewmovieComponent } from './newmovie/newmovie.component';
import { MovieComponent } from './movie/movie.component';
import { PopularMovieComponent } from './popular-movie/popular-movie.component';


const routes: Routes = [
  {
    path: "",
    component: NewmovieComponent
  },
  {
    path: "movie/:id",
    component: MovieComponent
  }
  , {
    path: "popular",
    component: PopularMovieComponent
  }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class RouterModuleModule { }
