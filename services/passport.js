const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

// generates an identifying piece of info, and passport stuff that into the cookie.
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// turn an id into a mongoose user model instance
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }) // check to see if the user already exists. query the db
        .then(existingUser => {
          //async action, so we need to handle it with a promise
          done(null, existingUser);
          if (existingUser) {
            // we already have a record with giver profile id
          } else {
            new User({ googleId: profile.id })
              .save() // grab the id off the profile and create a new user
              .then(user => done(null, user)); // async action
          }
        });
    }
  )
);
