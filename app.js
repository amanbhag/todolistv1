const express = require("express");
const app = express();
const port = 3000;
const todolistitem = ["do gym", "do walk"];
let workArray = [];
let itemnames;
let date = require(`${__dirname}/date.js`);
console.log(date());

let ejs = require("ejs");
app.use(express.static("public"));
app.set("view engine", "ejs");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  let listtitledate = date();

  res.render("list", { Listtitle: listtitledate, todolistitem: todolistitem });
});
app.post("/", function (req, res) {
  console.log(req.body.button);
  itemnames = req.body.inputtodolist;
  if (req.body.button === "work") {
    workArray.push(itemnames);
    res.redirect("/work");
  } else {
    itemnames = req.body.inputtodolist;
    todolistitem.push(itemnames);
    console.log(todolistitem);
    res.redirect("/");
  }
});
app.get("/work", (req, res) => {
  let day = "work";

  res.render("list", { Listtitle: day, todolistitem: workArray });
});

app.listen(process.env.PORT || port, () => {
  console.log(`listening on port ${port}`);
});
