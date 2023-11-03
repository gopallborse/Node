const express = require("express");
const bodyParser = require("body-parser");

// handlebars
// const expressHbs = require("express-handlebars");

const path = require("path");

const app = express();

// pug
// app.set('view engine', 'pug');
// app.set('views', 'views');

// handlebars
// app.engine(
//   "hbs",
//   expressHbs({
//     layoutsDir: "views/layouts/",
//     defaultLayout: "main-layout",
//     extname: "hbs",
//   })
// );
// app.set("view engine", "hbs");
// app.set("views", "views");

// ejs
app.set("view engine", "ejs");
app.set("views", "views");

// const adminRoutes = require("./routes/admin");
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.use(adminRoutes);
// app.use("/admin", adminRoutes); // filtered routes
app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).send("<h1>Page Not Found</h1>");
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404", { pageTitle: "Page Not Found!" });
});

app.listen(3000);
