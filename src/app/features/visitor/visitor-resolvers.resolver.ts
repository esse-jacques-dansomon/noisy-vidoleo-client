import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {Creator} from "../../data/models/creator";
import {CreatorService} from "../../data/services/creator.service";
import {VisitorStoreService} from "./store/visitor-store.service";

@Injectable({
  providedIn: 'root'
})
export class CreatorDetailsResolver implements Resolve<Creator> {
  constructor(
    private creatorService: CreatorService,
    private _visitorStoreService : VisitorStoreService
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const slug = <string>route.paramMap.get('slug');
    this._visitorStoreService.loadSelectedCreator(slug);
  }
}
