const router = require("express").Router();
const routes = require("./v1/user_routes");

router.use("/v1", routes);
module.exports = router;