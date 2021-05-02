import { loadingPageReducer, ILoadingPageReducer, } from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from "redux";

export interface IAppState {
  loadingPageState: ILoadingPageReducer
};

const rootReducer = combineReducers<IAppState>({
  loadingPageState: loadingPageReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export { store };