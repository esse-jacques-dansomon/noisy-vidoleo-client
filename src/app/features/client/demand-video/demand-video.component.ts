import { Component, OnInit } from '@angular/core';
import {DemandService} from "../../../data/services/demand.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../core/services/AuthService";
import {Observable} from "rxjs";
import {PaginationType} from "../../../core/data/PaginationType";
import {Demande} from "../../../data/models/demande";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-demand-video',
  templateUrl: './demand-video.component.html',
  styleUrls: ['./demand-video.component.css']
})
export class DemandVideoComponent implements OnInit {

  demands$: Observable<PaginationType<Demande>>
  status = [
    {value: '', viewValue: 'Tous'},
    {value: 'pending', viewValue: 'En cours'},
    {value: 'accepted', viewValue: 'Terminé'},
    {value: 'rejected', viewValue: 'Décliné'}
  ]
  selectedValue = this.status[0].value;
  private copies$: Observable<PaginationType<Demande>>;

  constructor(
    private _demandService: DemandService,
    private _router: Router,
    private _authService: AuthService,
  ) { }

  ngOnInit(): void {
    if(!this._authService.isLoggedIn()) {
      this._router.navigate(['/auth/login']);
    }else{
      this._authService.connectedUser$.subscribe(
        {
          next: (user) => {
            this.demands$ = this._demandService.getOneByTypeAndUri$('client/' + user.id) as Observable<PaginationType<Demande>>;
          }
        });
    }
  }

  pageChange(number: number) {
    this._authService.connectedUser$.subscribe(
      {
        next: (user) => {
          this.demands$  = this._demandService.getOneByTypeAndUriAndPage$('client/'+user.id, number);
          window.scrollTo(0, 0);        }
      });

  }

  filter(status) {
    this.selectedValue = status;
    this._authService.connectedUser$.subscribe(
      {
        next: (user) => {
          this.demands$  = this._demandService.getOneByTypeAndUri$('client/'+user.id + '+/'+status, );
        }
      });
  }

}
