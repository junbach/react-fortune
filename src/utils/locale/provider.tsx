import React, { FunctionComponent, memo, PropsWithChildren } from "react";
import { IntlShape, useIntl } from "react-intl";

/**
 * This implement to hold an instance of Intl so that can be used outside react life cycle (eg. redux actions)
 */
export let localeInst: IntlShape;
const LocaleProviderComponent: FunctionComponent<PropsWithChildren<unknown>> = ({ children }) => {
  localeInst = useIntl();
  return <>{children}</> || null;
};

export default memo(LocaleProviderComponent);
