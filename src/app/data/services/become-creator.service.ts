import { Injectable } from '@angular/core';
import {ResourceService} from "../../core/services/resource.service";
import {Creator} from "../models/creator";
import {HttpClient} from "@angular/common/http";
import {API_CONSTANTES} from "../../core/constants/API_CONSTANTES";
import {Observable} from "rxjs";
import {PaginationType} from "../../core/data/PaginationType";
import { BecameCreator } from '../models/became-creator';

@Injectable({
  providedIn: 'root'
})
export class BecomeCreatorService extends ResourceService<BecameCreator> {

  constructor(private http: HttpClient) {
    super(http);
    super.apiUrl =API_CONSTANTES.URI_BECAME_CREATOR;
  }

  public createDemande(BecameCreator:BecameCreator)  : Observable<any> {
    return this.http.post<BecameCreator>(API_CONSTANTES.URI_BECAME_CREATOR+'/create', BecameCreator);
  }

}
