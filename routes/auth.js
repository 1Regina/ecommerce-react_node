const express = require("express");

const router = express.Router();

// const { sayHi } = require ("../controllers/auth");
const { signup, signin, signout, requireSignin } = require("../controllers/auth");

const { userSignupValidator } = require("../validator"); // index.js loads automatically so dont need to specify

// router.get("/", (req, res) => {
//   res.send("hello from node hey");
// });

// after putting method in controller/auth.js
// router.get("/", sayHi);
router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);

router.get("/hello", requireSignin, (req, res) => {
  res.send("hello there")
})

router.get("/hi", (req, res) => {
  res.send("hihi")
})
module.exports = router;
