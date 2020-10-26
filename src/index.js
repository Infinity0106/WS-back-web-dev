const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const user_routes = require("./routes/user");

//create a server object:
app.get("/", function (req, res) {
  res.send("Hello World!"); //write a response to the client
});

app.get("/test", function (req, res) {
  res.send("get all");
});
app.get("/test/:id", function (req, res) {
  res.send(`get one: ${req.params.id}`);
});
app.post("/test", function (req, res) {
  res.send(req.body);
});
app.put("/test/:id", function (req, res) {
  res.send({ body: req.body, params: req.params.id });
});
app.delete("/test/:id", function (req, res) {
  res.status(204).send();
});

app.use(user_routes);

app.listen(8080, function () {
  console.log("server running on 8080");
}); //the server object listens on port 8080
