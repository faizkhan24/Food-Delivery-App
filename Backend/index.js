const express = require("express");
const Dish = require("./Models/dishesModel");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const db = require("./db");
app.use(express.json());
const dishesRoute = require("./routes/dishesRoutes");
const userRoute = require("./routes/userRoute");

app.use("/api/dishes", dishesRoute);
app.use("/api/users", userRoute);
app.use("/api/users", userRoute);

// app.get("/", (req, res) => {
//   res.send("Server working on port " + port);
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
