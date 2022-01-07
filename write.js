const fs = require("fs");
const path = require("path");
const express = require("express");

const rootDirectory = require("./util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  // res.send('<h1>Shop Page</h1>')
  res.sendFile(path.join(rootDirectory, "views", "note.html"));
});

router.post("/product", (req, res, next) => {
  const body = [];

  req.on("data", (packets) => {
    body.push(packets);
  });

  fs.writeFile("message.txt", req.body.title, (err) => {
    console.log("err");
    console.log(err);
    if (err) throw err;

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
    //   req.on("end", () => {
    //     const parsedBody = Buffer.concat(body).toString();
    //     const message = parsedBody.split("=")[1];

    //     fs.writeFile("message.txt", message, (err) => {
    //       if (err) throw err;

    //       res.statusCode = 302;
    //       res.setHeader("Location", "/");
    //       return res.end();
    //     });
  });
});

module.exports = router;
