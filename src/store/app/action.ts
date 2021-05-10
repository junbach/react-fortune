import { Action, ActionCreator } from "redux";
import { WebView } from "utils/constanst";

export interface AppState {
  locale: string;
  theme: string;
  collapsed: boolean;
  view: WebView;
}

/**
 * Detect view mode of current client device based on window inner width
 * @param width {number} window inner width
 * @return {WebView} the client device view mode
 */

export const getView = (width: number): WebView => {
  if (width >= 1220) {
    return WebView.DESKTOP_VIEW;
  } else if (width >= 768) {
    return WebView.TAB_VIEW;
  } else {
    return WebView.PHONE_VIEW;
  }
};

export enum AppActionType {
  RESIZE = "app@RESIZE",
  TOGGLE_COLLAPSE = "app@TOGGLE_COLLAPSE",
  LOCALE_CHANGE = "app@LOCALE_CHANGE",
}

interface ResizeAction extends Action<AppActionType> {
  type: AppActionType.RESIZE;
  payload: Partial<AppState>;
}

interface ToggleCollapseAction extends Action<AppActionType> {
  type: AppActionType.TOGGLE_COLLAPSE;
  collapsed: boolean;
}

interface LocaleChangeAction extends Action<AppActionType> {
  type: AppActionType.LOCALE_CHANGE;
  locale: string;
}

export type AppAction = ResizeAction | ToggleCollapseAction | LocaleChangeAction;

// Action trigger
export const changeLocale: ActionCreator<AppAction> = (locale: string) => ({
  type: AppActionType.LOCALE_CHANGE,
  locale,
});

export const toggleCollapse: ActionCreator<AppAction> = (collapsed: boolean) => ({
  type: AppActionType.TOGGLE_COLLAPSE,
  collapsed,
});

export const appResize: ActionCreator<AppAction> = (width: number) => {
  const view = getView(width);
  const collapsed = view !== WebView.DESKTOP_VIEW;
  return {
    type: AppActionType.RESIZE,
    payload: { collapsed, view },
  };
};
