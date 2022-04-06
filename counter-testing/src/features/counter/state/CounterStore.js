import counterReducer from "./CounterReducer";
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";

export const store = createStore(counterReducer, applyMiddleware(thunk));
