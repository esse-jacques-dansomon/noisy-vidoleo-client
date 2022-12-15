import { Component, Input } from '@angular/core';


@Component({
  selector: 'creator-card',
  template: `
    <div class="author__card ">
      <a  [routerLink]="'/createurs'">
        <div class="author__card-img">
          <img [src]="randomImage()" alt="">
        </div>
        <div class="author__card-info">
          <div class="author__card-info-title">
            <h3>{{creator.name}}</h3>
          </div>
          <div class="author__card-info-subtitle">
            <span>{{creator.role}}</span>
          </div>
          <div class="author__card-info-price">
            <span>{{creator.price}}</span>
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
  creator: any ;

  randomImage() {
    return 'https://random.imagecdn.app/500/600';

  }

}
