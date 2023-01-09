import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {Creator} from "../../data/models/creator";
import {CreatorService} from "../../data/services/creator.service";

@Injectable({
  providedIn: 'root'
})
export class CreatorDetailsResolver implements Resolve<Creator> {
  constructor(private creatorService: CreatorService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Creator> {
    const slug = <string>route.paramMap.get('slug');
    return this.creatorService.getBySlug$(slug);
  }
}
