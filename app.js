const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator")
require("dotenv").config();

// import routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category")
const productRoutes = require("./routes/product")

// app
const app = express();
console.log(process.env.DATABASE);
//db
mongoose
  .connect(process.env.DATABASE, {
    // for older mongoose version
    // useNewUrlParse: true,
    // useCreateIndex: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB error => ", err));

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator())

// routes
// app.get("/", (req, res) => {
//   res.send("hello from node ");
// });

// routes middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes)
app.use("/api", productRoutes)

const port = process.env.PORT || 8000; // nodejs env we get process to run it

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
