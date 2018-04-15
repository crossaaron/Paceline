const { User } = require("../models");
const PassportLocalStrategy = require('passport-local').Strategy;

/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {

  User.create(req.body)
    .then(dbUser => {
      console.log(dbUser);
      return done(null, dbUser);
    })
    .catch(err => {
      console.log(err);
      done(err);
    });
});
