const express = require("express");
const app = express();

const { connect } = require("./config/database");

require("dotenv").config();

const PORT = process.env.PORT || 4000;
//middlewares
app.use(express.json());
//connection with db
connect();
//moute route
const userRoutes = require("./routes/keywordRoutes");

app.use("/api/v1", userRoutes);

//default route
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running",
  });
});

//active the server
app.listen(PORT, () => {
  console.log(`App is running at PORT ${PORT}`);
});
