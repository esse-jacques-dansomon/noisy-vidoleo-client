import { StoreStateService } from './store-state.service';
import { Action, ActionReducer, MetaReducer } from '@ngrx/store';

export function getSaveStateMetaReducer<T>(storeStateService: StoreStateService): MetaReducer<T> {
  return (reducer: ActionReducer<T>): ActionReducer<T> =>
    (state: T | any, action: Action | any) => {
      const updatedState = reducer(state, action);
      storeStateService.saveState(updatedState as any);

      return updatedState;
    };
}

export function getMetaReducers<T>(storeStateService: StoreStateService): MetaReducer<T> {
  return getSaveStateMetaReducer<T>(storeStateService);
}
