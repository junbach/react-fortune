import { Select } from "antd";
import CountryFlag from "components/utilities/CountryFlag";
import React, { FunctionComponent, memo, useCallback } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { MainState } from "store";
import { AppState, changeLocale } from "store/app/action";
import { loadLocale, localeList } from "utils/locale";

import styles from "./locale-select.module.less";

const { Option } = Select;
const LocaleSelect: FunctionComponent = () => {
  const { locale } = useSelector<MainState, AppState>(state => state.app);
  const intl = useIntl();
  const dispatch = useDispatch();
  const opts = Object.keys(localeList).map(val => {
    const data = loadLocale(val);
    return (
      <Option value={val} key={val} title={intl.formatMessage(data.descriptor)}>
        <CountryFlag code={data.countryCode} className={styles.countryFlag} /> <FormattedMessage {...data.descriptor} />
      </Option>
    );
  });
  const handleChange = useCallback((val: string) => dispatch(changeLocale(val)), [dispatch]);
  return (
    <Select defaultValue={locale} onChange={handleChange} className={styles.localeSelect}>
      {opts}
    </Select>
  );
};

export default memo(LocaleSelect);
