import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../data/services/category.service";

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.css']
})
export class ClientLayoutComponent implements OnInit {

  constructor(
    private _categoryService : CategoryService
  ) { }

  ngOnInit(): void {
  }

  $categories = this._categoryService.getAll$();

}
