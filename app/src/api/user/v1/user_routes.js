const router = require("express").Router();
const internal = require("internal-utils");
const controllers = require("./controllers/user_controllers");
const middlewares = require("./middlewares/user_middlewares_index");

router.get("/get/info", middlewares.get_info, internal.middlewares.verify_session, controllers.get_info);

module.exports = router;