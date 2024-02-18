import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ResetStateAction } from './core.actions';
import {AppState} from "./app.reducer";

@Injectable({
  providedIn: 'root',
})
export class CoreStoreService {
  private readonly store: Store<AppState>;

  constructor(store: Store<AppState>) {
    this.store = store;
  }

  resetState() {
    this.store.dispatch(new ResetStateAction());
  }
}
