import { Injectable } from '@angular/core';
import {ResourceService} from "../../core/services/resource.service";
import {HttpClient} from "@angular/common/http";
import {API_CONSTANTES} from "../../core/constants/API_CONSTANTES";
import {Category} from "../models/category";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService  {

  apiUrl =API_CONSTANTES.URI_CATEGORIES
  constructor(private httpClient: HttpClient) {
  }

  getOneByTypeAndUri$ = (uri: string): Observable<any> => this.httpClient.get<any>(`${this.apiUrl}/${uri}`);
  getAll$ = (): Observable<any> => this.httpClient.get<any>(`${this.apiUrl}`);

  getOneByTypeAndUriAndPage$ = (uri: string, page : number, pageSize = '40'): Observable<any> => this.httpClient.get<any>(`${this.apiUrl}/${uri}`,  {params: {page: page.toString(),pageSize: pageSize}});

  getOneByUri$ = (uri: string): Observable<Category> => this.httpClient.get<Category>(`${this.apiUrl}/${uri}`);

  getBySlug$ = (uri: string): Observable<Category> => this.httpClient.get<Category>(`${this.apiUrl}/slug/${uri}`);

  create$ = (resource: Category): Observable<Category> => this.httpClient.post<Category>(this.apiUrl, resource);


}
