const passport = require('passport');

module.exports = app => {
  // authenticate user for the first time. kick user into OAuth flow
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  // exchange code for user details from google. exchange code for user profile
  app.get('/auth/google/callback', passport.authenticate('google'));
};
