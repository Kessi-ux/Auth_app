const express = require('express');
const authController = require('../controllers/authController');
const authValidator = require('../validators/authValidator');

const router = express.Router();

router.post('/signup', authValidator.validateSignup, authController.signup);
router.post('/login', authValidator.validateLogin, authController.login);
router.post('/forgotPassword', authValidator.validateForgotPassword, authController.forgotPassword);
router.patch('/resetPassword/:token', authValidator.validateResetPassword, authController.resetPassword);

module.exports = router;