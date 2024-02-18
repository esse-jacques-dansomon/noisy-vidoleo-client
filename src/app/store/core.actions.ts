import { Action } from '@ngrx/store';

export enum CoreActionTypes {
  ResetState = '[Core] ResetState',
}

export class ResetStateAction implements Action {
  readonly type = CoreActionTypes.ResetState;
}
