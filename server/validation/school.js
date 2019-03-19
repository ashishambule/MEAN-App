const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.schoolName = !isEmpty(data.schoolName) ? data.schoolName : '';
  
  if (!Validator.isLength(data.schoolName, {
      min: 2,
      max: 40
    })) {
    errors.schoolName = 'Handle needs to between 2 and 40 characters';
  }

  if (Validator.isEmpty(data.schoolName)) {
    errors.schoolName = 'schoolName is required';
  }

  if (!isEmpty(data.first)) {
    if (!Validator.isInt(data.first)) {
      errors.first = 'Not a valid std';
    }
  }

  if (!isEmpty(data.second)) {
    if (!Validator.isInt(data.second)) {
      errors.second = 'Not a valid std';
    }
  }
  if (!isEmpty(data.third)) {
    if (!Validator.isInt(data.third)) {
      errors.third = 'Not a valid std';
    }
  }
  if (!isEmpty(data.fourth)) {
    if (!Validator.isInt(data.fourth)) {
      errors.fourth = 'Not a valid std';
    }
  }
  if (!isEmpty(data.fifth)) {
    if (!Validator.isInt(data.fifth)) {
      errors.fifth = 'Not a valid std';
    }
  }
  if (!isEmpty(data.sixth)) {
    if (!Validator.isInt(data.sixth)) {
      errors.sixth = 'Not a valid std';
    }
  }
  if (!isEmpty(data.seventh)) {
    if (!Validator.isInt(data.seventh)) {
      errors.seventh = 'Not a valid std';
    }
  }
  if (!isEmpty(data.eighth)) {
    if (!Validator.isInt(data.eighth)) {
      errors.eighth = 'Not a valid std';
    }
  }

  if (!isEmpty(data.nineth)) {
    if (!Validator.isInt(data.nineth)) {
      errors.nineth = 'Not a valid std';
    }
  }

  if (!isEmpty(data.tenth)) {
    if (!Validator.isInt(data.tenth)) {
      errors.tenth = 'Not a valid std';
    }
  }



  return {
    errors,
    isValid: isEmpty(errors)
  };
};