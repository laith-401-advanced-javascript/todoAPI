'use strict'; 

const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const usersRouter = require("./models/users/router");
const todosRouter = require("./models/todo/router");
const productsRouter = require("./models/products/router");
const categoriesRouter = require("./models/categories/router");
const cartRouter = require("./models/cart/router");



// const bearerAuth = require("./auth/middleware/bearerAuth.js");

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");


app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended: false,
  }));

  app.use((req, res, next) => {
    if (req.query && req.query._method){ // eslint-disable-line
      req.method = req.query._method; // eslint-disable-line
    }
    next();
  });
  
  app.all("*", (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, HEAD, PUT, PATCH, POST, DELETE",
    );
  
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept",
    );
    next();
  });
  

  app.get("/signin", (req, res) => {
    res.status(200).send();
  });
  
  app.get("/signup", (req, res) => {
    res.status(200).render("signup");
  });

  

app.use("/api/v1/users", usersRouter);
app.use("/api/v1/", todosRouter);
app.use("/api/v1/", productsRouter);
app.use("/api/v1/", categoriesRouter);
app.use("/api/v1/", cartRouter);


// // router.get('/api/v1/', handleGetAllItems);
// https://api-js401.herokuapp.com/api/v1/todo


// page not found middleware
app.all("*", (req, res) => {
    res.status(404).send({ msg: "Sorry, page not found !" });
  });
  
  // error middleware
  app.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).send({ msg: !err.message ? err : err.message });
  });
  


module.exports = {
    server: app,
    start: port => {
        let PORT = port || process.env.PORT || 3000;
        app.listen(PORT, () => console.log(`lestining on ${PORT}`));

    },
};