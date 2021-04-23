import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from "./reducers";
import thunk from "redux-thunk";

let _store

function initStore() {
  return (_store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
  ))
}



export const store = _store ?? initStore()
