const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.schoolName = !isEmpty(data.schoolName) ? data.schoolName : '';
  
  // if (!Validator.isLength(data.schoolName, {
  //     min: 2,
  //     max: 40
  //   })) {
  //   errors.schoolName = 'Handle needs to between 2 and 40 characters';
  // }

  // if (Validator.isEmpty(data.schoolName)) {
  //   errors.schoolName = 'schoolName is required';
  // }

  // if (!isEmpty(data.first)) {
  //   if (!Validator.isAlpha(data.first)) {
  //     errors.first = 'Not a valid std';
  //   }
  // }

  // if (!isEmpty(data.second)) {
  //   if (!Validator.isAlpha(data.second)) {
  //     errors.second = 'Not a valid std';
  //   }
  // }
  // if (!isEmpty(data.third)) {
  //   if (!Validator.isAlpha(data.third)) {
  //     errors.third = 'Not a valid std';
  //   }
  // }
  // if (!isEmpty(data.fourth)) {
  //   if (!Validator.isAlpha(data.fourth)) {
  //     errors.fourth = 'Not a valid std';
  //   }
  // }
  // if (!isEmpty(data.fifth)) {
  //   if (!Validator.isAlpha(data.fifth)) {
  //     errors.fifth = 'Not a valid std';
  //   }
  // }
  // if (!isEmpty(data.sixth)) {
  //   if (!Validator.isAlpha(data.sixth)) {
  //     errors.sixth = 'Not a valid std';
  //   }
  // }
  // if (!isEmpty(data.seventh)) {
  //   if (!Validator.isAlpha(data.seventh)) {
  //     errors.seventh = 'Not a valid std';
  //   }
  // }
  // if (!isEmpty(data.eighth)) {
  //   if (!Validator.isAlpha(data.eighth)) {
  //     errors.eighth = 'Not a valid std';
  //   }
  // }

  // if (!isEmpty(data.nineth)) {
  //   if (!Validator.isAlpha(data.nineth)) {
  //     errors.nineth = 'Not a valid std';
  //   }
  // }

  // if (!isEmpty(data.tenth)) {
  //   if (!Validator.isAlpha(data.tenth)) {
  //     errors.tenth = 'Not a valid std';
  //   }
  // }



  return {
    errors,
    isValid: isEmpty(errors)
  };
};