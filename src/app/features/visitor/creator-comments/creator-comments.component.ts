import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { PaginationType } from 'src/app/core/data/PaginationType';
import { Creator } from 'src/app/data/models/creator';
import { Demande } from 'src/app/data/models/demande';
import { CreatorService } from 'src/app/data/services/creator.service';

@Component({
  selector: 'app-creator-comments',
  templateUrl: './creator-comments.component.html',
  styleUrls: ['./creator-comments.component.css']
})
export class CreatorCommentsComponent implements OnInit {

  creator : Creator ;
  creatorDemands$: Observable<PaginationType<Demande>>
  constructor(
    private route: ActivatedRoute,
    private _creatorService: CreatorService,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.creator = data['creator'];
      this.creatorDemands$ = this._creatorService.getOneByTypeAndUri$('avis/' + this.creator.id);
    });
  }

  pageChange(number: number) {
    this.creatorDemands$  = this._creatorService.getOneByTypeAndUriAndPage$('avis/'+this.creator.id, number);
    window.scrollTo(0, 0);
  }

}
