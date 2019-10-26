import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MoviesService } from 'src/app/service/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],

})
export class NavbarComponent implements OnInit {
  collapsed = true;
  searchForm;
  constructor(private _fb: FormBuilder, private _service: MoviesService,
    private _route: Router) { }

  ngOnInit() {
    this.searchForm = this._fb.group({
      "query": ["", Validators.required]
    })
  }

  get search() {
    return this.searchForm.get("query");
  }


  onSubmit() {
    const { query } = this.searchForm.value;
    this._route.navigateByUrl(`search/${query}`)
    this.searchForm.patchValue({
      "query": ""
    })
  }


}
