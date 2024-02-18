import {StorageType} from "../shared/storage";
import {AppState} from "./app.reducer";


export const coreConfig = {
  state: {
    key: 'ui-state',
    featureHashKeyFormat: 'ui-state-hash:{0}',
    storage: StorageType.Local,
    ingoredStates: [] as FieldsOf<AppState>,
  },
  filter: {
    textFilterDebounceTime: 400,
  },
  api: {
    params: {
      noCache: 'noCache',
    },
  },
  forms: {
    minRefreshTimeout: 1000,
    showNotificationTime: 1500, // miliseconds
  },
  websocket: {
    webSocketConnectionTimeout: 5000, // miliseconds
    webSocketMaxRetries: 10,
  },
};
