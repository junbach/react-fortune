import { english } from "./entries/en-us";
import LocaleEntry from "./entries/interface";
import { vietnamese } from "./entries/vi-vn";

const appLocale: Record<string, LocaleEntry> = {
  vi: vietnamese,
  en: english,
};
export const loadLocale = (locale: string): LocaleEntry => appLocale[locale];
export { appLocale as localeList };
export { localeMessageDescriptors as messages } from "./entries/interface";
export { default as LocaleProvider } from "./provider";
export { localeInst as intl } from "./provider";
