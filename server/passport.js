const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const TwitterStrategy = require("passport-twitter").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
    "830475821530-86aqo0qmcm6cbbpkl6ghq99e730aulib.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "ee2d63e57507543343b6";
GITHUB_CLIENT_SECRET = "b28e616e482eb7c4f8c0d2716f1284a73e98c548";

TWITTER_CONSUMER_KEY = "1597639036658589696-56sR66z0NjE5szJb2RZ44a74UpBCA0";
TWITTER_CONSUMER_SECRET = "9d4DweA9F3ZJDLQNViTytWslz90Xk1kpDyg1zXyaEKDnK";

// TWITTER_CONSUMER_KEY = "SVdBeG1ONzRka3JpX2dUb2ZDdzk6MTpjaQ";
// TWITTER_CONSUMER_SECRET = "KaSbeXfB8ugJtwgTyjXc-RrG91QLMr6lCZJ6sXbxypWNQvuIfE";

passport.use(
    new GoogleStrategy(
        {
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
        },
        function (accessToken, refreshToken, profile, done) {
            done(null, profile);
        }
    )
);

passport.use(
    new GithubStrategy(
        {
            clientID: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET,
            callbackURL: "/auth/github/callback",
        },
        function (accessToken, refreshToken, profile, done) {
            done(null, profile);
        }
    )
);

passport.use(
    new TwitterStrategy(
        {
            consumerKey: TWITTER_CONSUMER_KEY,
            consumerSecret: TWITTER_CONSUMER_SECRET,
            callbackURL: "/auth/twitter/callback"
        },
        function (token, tokenSecret, profile, done) {
            done(null, profile)
        }
    ));
passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});