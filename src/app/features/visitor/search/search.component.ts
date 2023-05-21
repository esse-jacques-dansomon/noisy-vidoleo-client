import { Component, OnInit } from '@angular/core';
import {CreatorService} from "../../../data/services/creator.service";
import {Creator} from "../../../data/models/creator";
import {PaginationType} from "../../../core/data/PaginationType";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  creators$: Observable<PaginationType<Creator>>;
  isButtonVisible = true;

  starsData: [
    {name: 'Trier par', value: 'default'},
    {name: 'Prix croissant', value: 'price-asc'},
    {name: 'Prix décroissant', value: 'price-desc'},
    {name: 'Date de création', value: 'date-asc'},
    {name: 'Date de création', value: 'date-desc'}

  ]

  trieData= [
    {name: 'Trier par', value: 'default'},
    {name: 'Prix croissant', value: 'price-asc'},
    {name: 'Prix décroissant', value: 'price-desc'},
    {name: 'Nouveau', value: 'new'},
    {name: 'Vedettes', value: 'vedette'}
  ];

  trieData1= [
    {name: 'Defaut', value: '0'},
    {name: 'Moins de 24h', value: '24'},
    {name: 'Moins de 48h', value: '48'},
    {name: 'Moins de 72h', value: '72'},
    {name: 'Moins de 96h', value: '96'},
    {name: 'Moins de 120h', value: '120'},
  ];
  trieData2= [
    {name: 'Defaut', value: '0'},
    {name: '5 étoiles', value: '5'},
    {name: '4 étoiles', value: '4'},
    {name: '3 étoiles', value: '3'},
    {name: '2 étoiles', value: '2'},
    {name: '1 étoiles', value: '1'},
  ];

  // array of array
  responseTime: [
    {name: 'Tous', value: 'default'},
    {name: 'Moins de 24h', value: '24'},
    {name: 'Moins de 48h', value: '48'},
    {name: 'Moins de 72h', value: '72'},
    {name: 'Moins de 96h', value: '96'},
    {name: 'Moins de 120h', value: '120'},
  ];



  keyWorld: string;
  filterForm: FormGroup= new FormGroup<any>({
    keyWorld: new FormControl(null),
    triType: new FormControl(null),
    maxPrice: new FormControl(null),
    minPrice: new FormControl(null),
    stars: new FormControl(null),
    responseTime: new FormControl(null),

  });
  constructor(
    private _creatorService: CreatorService,
    private _route : ActivatedRoute,
  ) { }





  searchByKeyWorld(page: number = 1) {
   const data = {
      page: page,
      perPage: 30,
    }
    if (this.filterForm.get('triType').value != null) {
      data['triType'] = this.filterForm.get('triType').value;
    }
    if (this.filterForm.get('maxPrice').value != null) {
      data['maxPrice'] = this.filterForm.get('maxPrice').value;
    }
    if (this.filterForm.get('minPrice').value != null) {
      data['minPrice'] = this.filterForm.get('minPrice').value;
    }
    if (this.filterForm.get('stars').value != null) {
      data['stars'] = this.filterForm.get('stars').value;
    }
    if (this.filterForm.get('responseTime').value != null) {
      data['responseTime'] = this.filterForm.get('responseTime').value;
    }if (this.filterForm.get('keyWorld').value != null) {
      data['keyWorld'] = this.filterForm.get('keyWorld').value;
    }
    this.creators$  = this._creatorService.filterCreator(data);
  }

  pageChange(number: number) {
    this.searchByKeyWorld(number);
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    //get keyworld from url params
    this._route.queryParams.subscribe(params => {
      let key= params['keyWorld'];
      if(key != undefined && key != ''){
        this.keyWorld = key;
        this.filterForm.patchValue({
          keyWorld: key
        })
      }
    });

    this.filterForm.valueChanges.subscribe((value) => {
      this.searchByKeyWorld();
    });

  }

  hideAndShow() {
    let  addInElement = document.querySelector(".search__filter-content-filters");
    addInElement.classList.toggle("hide");
    if (addInElement.classList.contains("hide")) {
      document.body.classList.remove("overlay");
    } else {
      document.body.classList.add("overlay");
    }
    this.isButtonVisible = !this.isButtonVisible;
  }

  hideAndShowMobile() {
    //add class to body
    let  addInElement = document.querySelector(".search__filter-content-filters");
    addInElement.classList.toggle("hide");
    if (addInElement.classList.contains("hide")) {
      document.body.classList.remove("overlay");
    } else {
      document.body.classList.add("overlay");
    }
  }
}
