import antdLocale from "antd/lib/locale-provider/vi_VN";
import messages from "assets/locale/vi_VN.json";

import LocaleEntry, { CountryCode, localeMessageDescriptors } from "./interface";

export const vietnamese: LocaleEntry = {
  antd: antdLocale,
  locale: "vi-VN",
  countryCode: CountryCode.VN,
  descriptor: localeMessageDescriptors.app.lang.vi,
  messages,
};
