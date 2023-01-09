import { Component, Input } from '@angular/core';
import {Creator} from "../../data/models/creator";
import {Demande} from "../../data/models/demande";


@Component({
  selector: 'demand-client-card',
  template: `
    <div  class="client-request-item flex-c-s card">
      <div class="author flex">
        <img width="50px" [src]="demand.creatorOccasionType.creator.profile_image" alt="">
        <div class="author-info flex-c-s">
          <h3 class="client-request-item__content__author__name">{{demand.creatorOccasionType.creator.pseudo_social_network}}</h3>
          <p class="client-request-item__content__author__titre">{{demand.creatorOccasionType.creator.titre}}</p>
        </div>
      </div>
      <div class="client-request-item__info">
        <div class="client-request-item__info__content">
          <h4 class="client-request-item__info__content__title">{{demand.status}}</h4>
          <p class="client-request-item__info__content__description">
            {{demand.receiver}}
          </p>
        </div>
        <div class="client-request-item__info__status">
          <p class="client-request-item__info__status__text">{{demand.status}}</p>
        </div>
        <a href="#" class="client-request-item-button flex">
          <i class="ri-arrow-right-s-line"></i>
          Details
        </a>

      </div>

    </div>

  `,
  styles: [`

   `]
})
export class DemandClientCard {
  @Input()
  demand: Demande ;

}
