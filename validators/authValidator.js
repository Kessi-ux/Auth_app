const { body } = require('express-validator');
const AppError = require('../utils/apiError');

exports.validateSignup = [
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email')
    .custom(value => {
      if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)) {
        throw new AppError('Please provide a valid email', 400);
      }
      return true;
    }),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
];

exports.validateLogin = [
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password').not().isEmpty().withMessage('Please provide a password')
];

exports.validateForgotPassword = [
  body('email').isEmail().withMessage('Please provide a valid email')
];

exports.validateResetPassword = [
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
];
