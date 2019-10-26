import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NewmovieComponent } from './newmovie/newmovie.component';
import { TruncateModule } from 'ng2-truncate';
import { MovieComponent } from './movie/movie.component';
import { SafePipe } from './pipe/safe.pipe';
import { AllMovieTemplateComponent } from './all-movie-template/all-movie-template.component';
import { PopularMovieComponent } from './popular-movie/popular-movie.component';
import { RouterModuleModule } from './router-module.module';



@NgModule({
  declarations: [AppComponent, NavbarComponent, NewmovieComponent, MovieComponent, SafePipe, AllMovieTemplateComponent, PopularMovieComponent],
  imports: [BrowserModule, NgbModule, HttpClientModule, RouterModuleModule, TruncateModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
