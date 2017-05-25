import moment       from 'moment';
import { Validator } from 'vee-validate';

Validator.installDateTimeValidators(moment);

export default {
  init() {
    Validator.extend('unique_username', {
      getMessage: () => 'Username no longer available',
      validate: value => new Promise((resolve) => {
        const validCoupons = ['abc123', 'user123', 'foobar'];

        setTimeout(() => {
          resolve({
            valid: value && validCoupons.indexOf(value) !== -1,
          });
        }, 500);
      }),
    });
  },
};
