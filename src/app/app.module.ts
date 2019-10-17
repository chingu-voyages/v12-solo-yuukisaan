import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { HttpClientModule } from '@angular/common/http';
import { NewmovieComponent } from './newmovie/newmovie.component';
import { Routes, RouterModule } from "@angular/router";
import { TruncateModule } from 'ng2-truncate';

const routes: Routes = [
  {
    path: "",
    component: NewmovieComponent
  }
]


@NgModule({
  declarations: [AppComponent, NavbarComponent, NewmovieComponent],
  imports: [BrowserModule, NgbModule, HttpClientModule, RouterModule.forRoot(routes), TruncateModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
