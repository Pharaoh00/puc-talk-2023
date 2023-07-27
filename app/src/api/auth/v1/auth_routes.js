const router = require("express").Router();
const internal = require("internal-utils");
const controllers = require("./controllers/auth_controllers");
const middlewares = require("./middlewares/auth_middleware_index");

router.post("/create", middlewares.create, controllers.create);
router.post("/confirmation", middlewares.confirmation,controllers.confirmation);
router.post("/login", controllers.login);
router.post("/logout", middlewares.logout, internal.middlewares.verify_session, controllers.logout);

module.exports = router;