import { Validator } from 'vee-validate';

export default {
  init() {
    Validator.extend('verify_coupon', {
      getMessage: field => `The ${field} is not a valid coupon.`,
      validate: value => new Promise((resolve) => {
        const validCoupons = ['SUMMER2016', 'WINTER2016', 'FALL2016'];

        setTimeout(() => {
          resolve({
            valid: value && validCoupons.indexOf(value.toUpperCase()) !== -1,
          });
        }, 500);
      }),
    });
  },
};
