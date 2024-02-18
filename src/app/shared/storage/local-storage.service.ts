import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { WebStorageService } from './web-storage-service';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService extends WebStorageService {
  constructor(loggerService: LoggerService) {
    super(localStorage, loggerService);
  }
}
