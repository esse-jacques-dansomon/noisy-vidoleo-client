import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { SessionStorageService } from './session-storage.service';
import { MemoryStorageService } from './memory-storage.service';
import { StorageType } from './storage-type';
import { StorageService } from './storage-service';

@Injectable({
  providedIn: 'root',
})
export class StorageFactoryService {
  private readonly localStorageService: LocalStorageService;
  private readonly sessionStorageService: SessionStorageService;
  private readonly memoryStorageService: MemoryStorageService;

  constructor(
    localStorageService: LocalStorageService,
    sessionStorageService: SessionStorageService,
    memoryStorageService: MemoryStorageService
  ) {
    this.localStorageService = localStorageService;
    this.sessionStorageService = sessionStorageService;
    this.memoryStorageService = memoryStorageService;
  }

  getStorage(type: StorageType): StorageService {
    switch (type) {
      case StorageType.Local: {
        return this.localStorageService;
      }
      case StorageType.Session: {
        return this.sessionStorageService;
      }
      case StorageType.Memory: {
        return this.memoryStorageService;
      }
      default:
        throw new Error(`Unknown storage type: ${type}.`);
    }
  }
}
