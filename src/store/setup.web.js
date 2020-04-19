
import {applyMiddleware, createStore, combineReducers, compose} from "redux";
import thunk from "redux-thunk";
import * as reducers from "./../reducers";
import {createLogger} from "redux-logger";
import promise from "./promise";
import array from "./array";
import whitelist from "./whitelist";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import { goToAuth, goToHome } from "../actions";
import {history} from "../helpers";
export const storeObj = {};
const persistConfig = {
  key: "root",
  storage,
  whitelist,
};
export default function setup() {

  const logger = createLogger();
  let middleWareArray = [thunk, promise, array];
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    middleWareArray.push(logger);
  }
  const middleware = [applyMiddleware(...middleWareArray)];
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    middleware.push(
      applyMiddleware(require("redux-immutable-state-invariant").default()),
    );
  }
  const reducer = combineReducers(reducers);
  const persistedReducer = persistReducer(persistConfig, reducer);

  const store = createStore(persistedReducer, {}, compose(...middleware));

  // Attach the store to the Chrome debug window
  if (global.isDebuggingInChrome) {
    // eslint-disable-line
    window.store = store;
  }
  const persistor = persistStore(store, null, () => {
    const { isLoggedIn=false } = store.getState().user;
    const { pathname='' } = history.location;
    console.log("path name and islogged in ", pathname, isLoggedIn)
    if ( isLoggedIn && ( pathname == '/' || pathname == '/SignUp' || pathname == '/OTP' || pathname == '/SignIn' )) {
      goToHome();
    } else if (!isLoggedIn && ( pathname !== '/SignUp' && pathname !== '/OTP' && pathname !== '/SignIn')) {
        goToAuth();
    }
  });
  storeObj.store = store;
  return {persistor, store};
}
