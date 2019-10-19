import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { HttpClientModule } from '@angular/common/http';
import { NewmovieComponent } from './newmovie/newmovie.component';
import { Routes, RouterModule } from "@angular/router";
import { TruncateModule } from 'ng2-truncate';
import { MovieComponent } from './movie/movie.component';
import { SafePipe } from './pipe/safe.pipe';

const routes: Routes = [
  {
    path: "",
    component: NewmovieComponent
  },
  {
    path:"movie/:id",
    component: MovieComponent
  }
]


@NgModule({
  declarations: [AppComponent, NavbarComponent, NewmovieComponent, MovieComponent, SafePipe],
  imports: [BrowserModule, NgbModule, HttpClientModule, RouterModule.forRoot(routes), TruncateModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
