import { Reducer } from "redux";

import { appConfig } from "../../utils/config";
import { WebView } from "../../utils/constanst";
import { AppAction, AppActionType, AppState, getView } from "./action";

const view = getView(window.innerWidth);
const initialState: AppState = {
  locale: appConfig.lang,
  theme: appConfig.theme,
  collapsed: view !== WebView.DESKTOP_VIEW,
  view,
};

const reducer: Reducer<AppState, AppAction> = (state = initialState, action) => {
  switch (action.type) {
    case AppActionType.LOCALE_CHANGE:
      return { ...state, locale: action.locale };
    case AppActionType.TOGGLE_COLLAPSE:
      return { ...state, collapsed: action.collapsed };
    case AppActionType.RESIZE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
