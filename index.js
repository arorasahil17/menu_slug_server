const express = require("express");
const connectDb = require("./db/db");
const app = express();
const port = 3000;
const menuRouter = require("./routes");
const cors = require("cors");
const path = require("path");

connectDb();

app.use(cors());
app.use(express.json());
app.use("/api", menuRouter);
app.use(express.static(path.resolve(__dirname, "dist")));
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "dist", "index.html"))
);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
