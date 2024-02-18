export interface StorageService {
  set(key: string, value?: any): void;

  remove(key: string): void;

  get<T>(key: string): T;

  has(key: string): boolean;
}
