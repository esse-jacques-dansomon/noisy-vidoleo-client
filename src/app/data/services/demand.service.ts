import { Injectable } from '@angular/core';
import {ResourceService} from "../../core/services/resource.service";
import {Creator} from "../models/creator";
import {HttpClient} from "@angular/common/http";
import {API_CONSTANTES} from "../../core/constants/API_CONSTANTES";
import {PaginationType} from "../../core/data/PaginationType";
import {Observable} from "rxjs";
import {Demande} from "../models/demande";

@Injectable({
  providedIn: 'root'
})
export class DemandService extends ResourceService<Demande> {

  constructor(private http: HttpClient) {
    super(http);
    super.apiUrl =API_CONSTANTES.URI_DEMANDES_VIDEOS;
  }


}
