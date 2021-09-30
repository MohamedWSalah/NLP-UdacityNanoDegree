const mockAPIResponse = require("./mockAPI.js");
const express = require("express");
const nodeFetch = require("node-fetch");
const FormData = require("form-data");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();
const app = express();
app.use(express.static("dist"));
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 8081;
console.log(`Your API key is ${process.env.API_KEY}`);

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.post("/submit", async function (req, res) {
  console.log("==========POST REQUEST===============");

  const requestedURL = req.body.urlText;
  const formdata = new FormData();
  formdata.append("key", process.env.API_KEY);
  formdata.append("url", requestedURL);
  formdata.append("lang", "en");

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  nodeFetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
    .then((response) => response.json())
    .then((resData) => res.send(resData))
    .catch((error) => console.log(error));
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;
