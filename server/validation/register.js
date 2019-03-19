const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.schoolName = !isEmpty(data.schoolName) ? data.schoolName : '';
  data.principalName = !isEmpty(data.principalName) ? data.principalName : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';

  if (!Validator.isLength(data.schoolName, { min: 2, max: 30 })) {
    errors.schoolName = 'schoolName must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.schoolName)) {
    errors.schoolName = 'schoolName field is required';
  }

  if (!Validator.isLength(data.principalName, { min: 2, max: 30 })) {
    errors.principalName = 'principalName must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.principalName)) {
    errors.principalName = 'principalName field is required';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm Password field is required';
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
