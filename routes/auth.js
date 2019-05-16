var authController = require("../controllers/authcontroller.js");

module.exports = function(app, passport) {

  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/characters",
      failureRedirect: "/?failure-signup"
    })
  );

  app.get("/dashboard", isLoggedIn, authController.dashboard);

  app.get("/logout", authController.logout);

  app.post(
    "/signin",
    passport.authenticate("local", {
      successRedirect: "/characters",
      failureRedirect: "/?failure"
    })
  );

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();

    res.redirect("/?needs-signin");
  }
};