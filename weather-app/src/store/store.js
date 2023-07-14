import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

import { persistStore, persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2, // Xem thêm tại mục "Quá trình merge".
  whitelist: ["favourite"],
};

const composedEnhancer = composeWithDevTools();
const pReducer = persistReducer(persistConfig, rootReducer, composedEnhancer);

export const store = createStore(pReducer);
export const persistor = persistStore(store);

// const store = createStore(rootReducer, composedEnhancer);

//export default store;
