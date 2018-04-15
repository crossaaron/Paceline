const express = require('express');
const validator = require('validator');
const passport = require('passport');
const db = require("../../models");

const router = new express.Router();

/**
 * Validate the login form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 *                   errors tips, and a global message for the whole form.
 */


router.post('/signup', (req, res, next) => {
  console.log(req.body);

  db.User.create(req.body)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.json(err).status(422));
});

router.post('/login', (req, res, next) => {
  
  return passport.authenticate('local-login', (err, token, userData) => {
    if (err) {
      console.log(err);
      if (err.name === 'IncorrectCredentialsError') {
        return res.status(400).json({
          success: false,
          message: err.message
        });
      }

      return res.status(400).json({
        success: false,
        message: 'Could not process the form.'
      });
    }


    return res.json({
      success: true,
      message: 'You have successfully logged in!',
      token,
      user: userData
    });
  })(req, res, next);
});

module.exports = router;
