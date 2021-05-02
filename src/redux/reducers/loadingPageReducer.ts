import { LoadingPageAction, LoadingActionTypes } from '../actions/loadingAction/loadingPageActionTypes';

export interface ILoadingPageReducer {
  isPageLoading: boolean,
};

export const initState: ILoadingPageReducer = {
  isPageLoading: false,
};

export const loadingPageReducer = (state: ILoadingPageReducer = initState, action: LoadingPageAction) => {
  switch (action.type) {
    case LoadingActionTypes.TOGGLE_PAGE_LOADING: {
      return {
        ...initState,
        isPageLoading: action.payload,
      };
    }
    default: return state;
  }
};