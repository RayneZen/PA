const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

// const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
// const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(new GoogleStrategy({
  clientID: "37321790780-ip19pkr42q3g2ci60a2dn6qbl66mushd.apps.googleusercontent.com",
  clientSecret: "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",
  callbackURL: "http://localhost:3001/google/callback",
  passReqToCallback: true,
},
function(request, accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});