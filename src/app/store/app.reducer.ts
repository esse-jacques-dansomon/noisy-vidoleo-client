import {ActionReducerMap} from "@ngrx/store";
import {getMetaReducersProvider} from "./store.providers";
import {VisitorState} from "../features/visitor/store/visitor.reducer";


export interface AppState {
  visitor: VisitorState,
}

export const appReducer: ActionReducerMap<AppState> = {} as any;
export const metaReducersProvider = getMetaReducersProvider();
