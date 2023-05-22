import { Component, Input } from '@angular/core';
import {Creator} from "../../data/models/creator";
import { environment } from 'src/environments/environment';


@Component({
  selector: 'creator-card',
  template: `
    <div class="author__card ">
      <a  routerLink="/createurs/{{creator.slug}}">
        <div class="author__card-img">
          <img [src]="pictureUrl+''+creator.profile_image" [alt]="creator.slug">
        </div>
        <div class="author__card-info">
          <div class="author__card-info-title">
            <h3>{{creator.first_name}}</h3>
          </div>
          <div class="author__card-info-subtitle">
            <span>{{creator.titre}}</span>
          </div>
          <div class="author__card-info-price">
            <span>{{getOccasionTypeMinPrice() | currency : ' FCFA ' : 'code' : '3.2-2' }} </span>
          </div>
        </div>
      </a>
    </div>
  `,
  styles: [`

   `]
})
export class CreatorCard {
  @Input()
  creator: Creator ;

  pictureUrl:string = environment.pictureUrl;
  getOccasionTypeMinPrice() : number {
    return this.creator.occasionsTypes.reduce((a, b) => a.price < b.price ? a : b).price;
  }

}
