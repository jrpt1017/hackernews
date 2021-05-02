import { LoadingActionTypes, TogglePageLoadingAction } from './loadingPageActionTypes';

export const togglePageLoading = (value: boolean): TogglePageLoadingAction => {
  return {
    type: LoadingActionTypes.TOGGLE_PAGE_LOADING,
    payload: value,
  };
};