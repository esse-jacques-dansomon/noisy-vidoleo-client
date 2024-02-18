import { Injectable } from '@angular/core';
import { WebStorageService } from './web-storage-service';
import {LoggerService} from "./logger.service";

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService extends WebStorageService {
  constructor(loggerService: LoggerService) {
    super(sessionStorage, loggerService);
  }
}
