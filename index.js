const http = require("http");
const routes = require("./routes");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const rootDirectory = require("./routes");
const writeDirectory = require("./write");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(rootDirectory);
app.use("/write", writeDirectory);

app.use((req, res, next) => {
  // res.status(404).send('<h1>Page Not Found</h1>')
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  // res.status(404).sendFile(path.join(rootDirectory, "views", "404.html"));
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
