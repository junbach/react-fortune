import { Locale as Localization } from "antd/lib/locale-provider";
import { MessageDescriptor } from "react-intl";

export default interface LocaleEntry {
  locale: string;
  messages: Record<string, string>;
  antd: Localization;
  countryCode: CountryCode;
  descriptor: MessageDescriptor;
}

export enum CountryCode {
  US,
  VN,
}

export { default as localeMessageDescriptors } from "assets/locale/map.json";
