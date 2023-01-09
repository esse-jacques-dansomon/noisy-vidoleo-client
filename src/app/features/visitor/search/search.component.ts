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
  filterModel : any = {
  }

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
    keyWorld: new FormControl(''),
    triType: new FormControl(''),
    maxPrice: new FormControl(''),
    minPrice: new FormControl(''),
    stars: new FormControl(''),
    responseTime: new FormControl(''),

  });
  constructor(
    private _creatorService: CreatorService,
    private _route : ActivatedRoute,
  ) { }





  searchByKeyWorld() {
    this.creators$  = this._creatorService.getOneByTypeAndUri$('search/'+this.keyWorld);
  }

  pageChange(number: number) {
    this.creators$  = this._creatorService.getOneByTypeAndUriAndPage$('search/'+this.keyWorld, number);
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    //get keyworld from url params
    this._route.queryParams.subscribe(params => {
      let key= params['keyWorld'];
      if(key != undefined && key != ''){
        this.keyWorld = key;
        this.searchByKeyWorld();
        // this.searchAttributes.keyWorld = key ?? '';
        // this.searchForm.controls['keyWorld'].setValue(key);
        // this.searchResult$ = this.searchService.search(this.searchAttributes, 1);
      }
    });

    this.filterForm.valueChanges.subscribe((value) => {
      console.log(value);
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
