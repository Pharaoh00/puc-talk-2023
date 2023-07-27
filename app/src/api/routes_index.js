const express = require("express");
const router = express.Router();
const auth = require("./auth/auth_index");
const user = require("./user/user_index");

router.use("/auth", auth);
router.use("/user", user);

module.exports = router;