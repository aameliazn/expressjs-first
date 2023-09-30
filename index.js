const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/api", (request, response) => {
  response.send("Halaman Utama");
});

app.get("/api/hello", (req, res) => {
  console.log({ urlParam: req?.query });
  res.send("Hello World!");
});

app.post("/api/login", (req, res) => {
  console.log({ requestFromOutside: req?.body });
  res.send("Login Berhasil!");
});

app.put("/api/username", (req, res) => {
  console.log({ updateData: req?.body });
  res.send("Update Berhasil!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
