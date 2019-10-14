import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { HttpClientModule }    from '@angular/common/http';


@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, NgbModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
