export enum LoadingActionTypes {
  TOGGLE_PAGE_LOADING = 'TOGGLE_PAGE_LOADING',
};

export interface TogglePageLoadingAction {
  type: LoadingActionTypes.TOGGLE_PAGE_LOADING,
  payload: boolean,
}

export type LoadingPageAction = TogglePageLoadingAction;