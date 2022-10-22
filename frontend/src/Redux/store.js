import {
    applyMiddleware,
    combineReducers,
    legacy_createStore as createStore,
  } from "redux";
  
  import thunk from "redux-thunk";
import { TimeClientReducer } from "./TimeClient/timeclientReducer";
import { Reducer } from "./Todo/reducer";
 
  const rootReduser = combineReducers({
   
    TimeClientReducer:TimeClientReducer,
    todos:Reducer
  });
  
  export const store = createStore(rootReduser, applyMiddleware(thunk));
  