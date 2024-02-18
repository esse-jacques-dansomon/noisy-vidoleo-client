import { StorageService } from './storage-service';
import { LoggerService } from './logger.service';

export abstract class WebStorageService implements StorageService {
  private readonly storage: Storage;
  private readonly loggerService: LoggerService;

  protected constructor(storage: Storage, loggerService: LoggerService) {
    this.storage = storage;
    this.loggerService = loggerService;
  }

  set(key: string, value?: any): void {
    const serializedValue = JSON.stringify(value);
    this.storage.setItem(key, serializedValue);
  }

  remove(key: string): void {
    this.storage.removeItem(key);
  }

  get<T>(key: string): T {
    let value: T | undefined = undefined;

    if (this.has(key)) {
      const serializedValue = this.storage.getItem(key) ?? '';
      try {
        value = JSON.parse(serializedValue);
      } catch (e) {
        this.loggerService.error(`Failed to parse local storage value: '${value}'.`, e);
        value = undefined;
      }
    }

    return value as T;
  }

  has(key: string): boolean {
    const value: any = this.storage.getItem(key);
    const isExists = !!value;

    return isExists;
  }
}
