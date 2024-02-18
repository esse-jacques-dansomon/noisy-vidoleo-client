import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { StorageService } from './storage-service';

export const initialMemoryStore = new InjectionToken<StringMap<any>>('initialMemoryStore');

@Injectable({
  providedIn: 'root',
})
export class MemoryStorageService implements StorageService {
  private readonly storage: StringMap<any>;

  constructor(@Optional() @Inject(initialMemoryStore) storage?: StringMap<any>) {
    this.storage = storage || {};
  }

  set(key: string, value?: any): void {
    this.storage[key] = value;
  }

  remove(key: string): void {
    // tslint:disable-next-line:no-dynamic-delete
    delete this.storage[key];
  }

  get<T>(key: string): T {
    let value: any;

    if (this.has(key)) {
      value = this.storage[key];
    }

    return value;
  }

  has(key: string): boolean {
    const value = this.storage[key];
    return !!value;
  }
}
