import getRandomFox from "random-fox-img";
import getRandomCat from "random-cat-img";
import express from "express";
let response = "";
let response2 = "";
getRandomFox().then((data) => (response = data.message));
getRandomCat().then((data) => (response2 = data.message));

//backend

const users = [
  { name: "bat", age: 69 },
  { name: "bold", age: 14 },
  { name: "hulgaic", age: 10 },
];

const app = express();
app.use(express.json());

app.get("/users/:name", function (req, res) {
  res.status(200);
  res.setHeader("Access-Control-Allow-Origin", "*");
  let { name } = req.params;
  const newArr = users.filter((element) => element.name === name);
  res.json(newArr[0]);
});
app.get("/", function (req, res) {
  res.status(200);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json({ image1: response, image2: response2, method: req.method });
});

app.post("/", function (req, res) {
  res.status(201);
  res.setHeader("Access-Control-Allow-Origin", "*");
  users.push(req.body);
  res.json(users);
});
app.put("/", function (req, res) {
  res.status(201);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json({ image1: response, image2: response2, method: req.method });
});
app.delete("/", function (req, res) {
  res.status(269);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json({ image1: response, image2: response2, method: req.method });
});

app.listen(8080);
