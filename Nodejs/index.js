/*import http from "http";
//import { generateLovePercent } from "./features.js";
//import fs from "fs";

console.log(generateLovePercent());
//console.log(myObj.gfName2);
//console.log(http);
const server = http.createServer((req, res) => {
  if (req.url === "/about") {
    res.end(`<h1> Love is ${generateLovePercent()} <h1>`);
  }
  if (req.url === "/") {
    fs.readFile("./index.html", (err, home) => {
      res.end(home);
    });
  } else if (req.url === "/contact") {
    res.end("<h1>Contact page</h1>");
  } else {
    res.end("<h1>Page not found</h1>");
  }
});

server.listen(5000, () => {
  console.log("Server is Working");
}); */

import express from "express";
import path from "path";

const app = express();

const users = [];
//using Middlewares
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));

//Setting up view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //const pathlocation = path.resolve();

  //res.sendFile("index.html");

  res.render("index", { name: "vardhan" });

  //res.sendStatus(503);
  /* res.json({
    success: true,
    products: [],
  });*/
});

app.get("/success", (req, res) => {
  res.render("success");
});

app.post("/contact ", (req, res) => {
  users.push({ username: req.body.name, email: req.body.email });
  res.redirect("/success");
});

app.get("/users", (req, res) => {
  res.json({
    users,
  });
});

app.listen(5000, () => {
  console.log("Server is working");
});
