/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';
import zhLocaleData from 'react-intl/locale-data/zh';

import { DEFAULT_LOCALE } from './containers/App/constants'; // eslint-disable-line
import zhHantTranslationMessages from './translations/zh-Hant.json';

export const appLocales = [
  'zh-Hant',
];

addLocaleData(zhLocaleData);

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE
    ? formatTranslationMessages(DEFAULT_LOCALE, zhHantTranslationMessages)
    : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    let message = messages[key];
    if (!message && locale !== DEFAULT_LOCALE) {
      message = defaultFormattedMessages[key];
    }
    return Object.assign(formattedMessages, { [key]: message });
  }, {});
};

export const translationMessages = {
  'zh-Hant': formatTranslationMessages('zh-Hant', zhHantTranslationMessages),
};
