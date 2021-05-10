import { ConfigProvider } from "antd";
import React, { FunctionComponent, PropsWithChildren } from "react";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import { MainState } from "store";
import { AppState } from "store/app/action";
import { loadLocale, LocaleProvider } from "utils/locale";

export const AppProvider: FunctionComponent<PropsWithChildren<unknown>> = ({ children }) => {
  const { locale } = useSelector<MainState, AppState>(state => state.app);
  const currentLocale = loadLocale(locale);
  return (
    <ConfigProvider locale={currentLocale.antd}>
      <IntlProvider locale={currentLocale.locale} messages={currentLocale.messages}>
        <LocaleProvider />
        {children}
      </IntlProvider>
    </ConfigProvider>
  );
};
