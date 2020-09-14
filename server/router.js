const passport = require("passport");
const passportService = require("./services/passport");
const Authentication = require("./controllers/authentication");

const requireAuth = passport.authenticate("jwt", { session: false });

module.exports = function (app) {
  app.get("/", requireAuth, function (req, res) {
    res.send({ it: "works" });
  });

  app.post("/signup", Authentication.signup);
};
