import { Injectable } from '@angular/core';
import {StorageFactoryService} from "../shared/storage";
import {coreConfig} from "./core.config";
import {StringUtils} from "../shared";


@Injectable({
  providedIn: 'root',
})
export class StoreStateService {
  private readonly storageFactoryService: StorageFactoryService;

  constructor(storageFactoryService: StorageFactoryService) {
    this.storageFactoryService = storageFactoryService;
  }

  private get storage() {
    return this.storageFactoryService.getStorage(coreConfig.state.storage);
  }

  saveState<T>(state: Partial<T> | any = {}, ignore: string[] = coreConfig.state.ingoredStates) {
    const stateToPersist = {} as T | any;
    Object.keys(state).forEach((key: any) => {
      if (!ignore.includes(key)) {
        stateToPersist[key] = state[key];
      }
    });

    this.storage.set(coreConfig.state.key, stateToPersist);
  }

  getState<T>(): T {
    return this.storage.get<T>(coreConfig.state.key);
  }

  restoreFeatureState<TFeatureState>(featureKey: string, initialState: TFeatureState): TFeatureState {
    const stateHash = StringUtils.hash(JSON.stringify(initialState));
    const featureHashKey = StringUtils.format(coreConfig.state.featureHashKeyFormat, featureKey);
    const previousStateHash = this.storage.get(featureHashKey);

    if (stateHash !== previousStateHash) {
      this.storage.set(featureHashKey, stateHash);
      return initialState;
    }

    const restoredState = this.getFeatureState<TFeatureState>(featureKey);
    if (!restoredState) {
      return initialState;
    }

    return restoredState;
  }

  clearState() {
    this.storage.remove(coreConfig.state.key);
  }

  private getFeatureState<TFeatureState, TState extends { [key: string]: TFeatureState } = any>(
    featureKey: string
  ): TFeatureState | null {
    const state = this.getState<TState>();

    if (!state) {
      return null;
    }

    return state[featureKey];
  }
}
