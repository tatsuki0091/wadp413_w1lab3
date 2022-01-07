const fs = require("fs");
const path = require("path");
const express = require("express");

const rootDirectory = require("./util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  // res.send('<h1>Shop Page</h1>')
  let data = fs.readFileSync("message.txt", "utf8");
  res.render("top", { title: "top", data });
  //   res.sendFile(path.join(rootDirectory, "views", "top.ejs"));
});

module.exports = router;

// const requestHandler = (req, res) => {

//   if (req.url === "/write-message") {
//     res.setHeader("Content-Type", "text/html");
//     res.write(`
//                 <h1>Write a message</h1>
//                 <form action="/message" method="POST">
//                     <input type="text" name="message" />
//                     <button type="submit">Send Message</button>
//                 </form>
//             `);
//     return res.end();
//   }

//   if (req.url === "/read-message") {
//     try {
//       let data = fs.readFileSync("message.txt", "utf8");

//       res.setHeader("Content-Type", "text/html");
//       res.write(`
//                     <h1>Read a message</h1>
//                     <p>${data.split("+").join(" ")}</p>
//                 `);
//       return res.end();
//     } catch (e) {
//       console.log("Error", e.stack);
//     }
//   }

//   if (req.url === "/message" && req.method === "POST") {
//     const body = [];

//     req.on("data", (packets) => {
//       body.push(packets);
//     });
//     req.on("end", () => {
//       const parsedBody = Buffer.concat(body).toString();
//       const message = parsedBody.split("=")[1];

//       fs.writeFile("message.txt", message, (err) => {
//         if (err) throw err;

//         res.statusCode = 302;
//         res.setHeader("Location", "/");
//         return res.end();
//       });
//     });
//   }
// };
