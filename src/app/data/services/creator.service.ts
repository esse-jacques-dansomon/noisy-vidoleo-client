import { Injectable } from '@angular/core';
import {ResourceService} from "../../core/services/resource.service";
import {Creator} from "../models/creator";
import {HttpClient} from "@angular/common/http";
import {API_CONSTANTES} from "../../core/constants/API_CONSTANTES";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatorService extends ResourceService<Creator> {

  constructor(private http: HttpClient) {
    super(http);
    super.apiUrl =API_CONSTANTES.URI_CREATORS;
  }

  public getByFilters(filterModel:any):Observable<any>{
    return this.http.get(API_CONSTANTES.URI_CREATORS+'/filter',filterModel);
  }


}
