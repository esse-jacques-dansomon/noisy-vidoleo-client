import { META_REDUCERS, StoreConfig } from '@ngrx/store';
import { FactoryProvider } from '@angular/core';
import { StoreStateService } from './store-state.service';
import { getMetaReducers } from './meta.redurers';

export function featureStoreConfigFactory<TState>(
  featureStoreKey: string,
  featureStoreInitialState: TState,
  storeStateService: StoreStateService
): StoreConfig<TState> {
  const state = storeStateService.restoreFeatureState<TState>(featureStoreKey, featureStoreInitialState);

  return { initialState: state };
}

export function getMetaReducersProvider(): FactoryProvider {
  return {
    provide: META_REDUCERS,
    deps: [StoreStateService],
    useFactory: getMetaReducers,
    multi: true,
  };
}
