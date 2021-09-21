import { extend, localize } from 'vee-validate';
/* eslint-disable camelcase */
import {
  required, min_value, length, regex,
} from 'vee-validate/dist/rules';
/* eslint-enable camelcase */
import zhTaiwan from 'vee-validate/dist/locale/zh_TW.json';

extend('required', required);
extend('min_value', min_value);
extend('length', length);
extend('regex', regex);

localize({
  zhTaiwan: {
    messages: {
      ...zhTaiwan.messages,
      required: '此項為必填項目，請勿留空',
      min_value: '此項須為數字，且不能為負',
      regex: '只能輸入數字或英文大小寫',
      length: '必須且僅能輸入{length}個字符',
    },
  },
});

localize('zhTaiwan');
