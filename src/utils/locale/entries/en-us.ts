import antdLocale from "antd/lib/locale-provider/en_US";
import messages from "assets/locale/en_US.json";

import LocaleEntry, { CountryCode, localeMessageDescriptors } from "./interface";

export const english: LocaleEntry = {
  antd: antdLocale,
  locale: "en-US",
  countryCode: CountryCode.US,
  descriptor: localeMessageDescriptors.app.lang.en,
  messages,
};
