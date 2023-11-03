// const http = require('http'); // not required as we have now app.listen(3000);

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

// app.use does not match exact
// app.get / app.post / app.put / app.delete does exact match

// app.use((req, res, next) => {
//   // console.log('In the middleware!');
//   next(); // allows the request to continue to the next middleware in line
// });

app.get("/add-product", (req, res, next) => {
  //   console.log("In another middleware!");
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  //   console.log("In another middleware!");
  res.send("<h1>Hello from Express!</h1>");
});

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);
