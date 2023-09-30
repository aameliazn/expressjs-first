const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const client = require("./connection");
const response = require("./response");

app.use(bodyParser.json());

app.get("/api", (request, response) => {
  response.send("Halaman Utama");
});

app.get("/api/data-siswa", (req, res) => {
  const sql = "SELECT * FROM m_expressjs_first.t_siswa ORDER BY id ASC";
  client.query(sql, (error, result) => {
    response(200, result?.rows, "get all data from siswa", res);
  });
});

app.get("/api/hello", (req, res) => {
  console.log({ urlParam: req?.query });
  res.send("Hello World!");
});

app.get("/api/find", (req, res) => {
  const sql = `SELECT name FROM m_expressjs_first.t_siswa WHERE nis = ${req?.query?.nis}`;
  client.query(sql, (error, result) => {
    response(200, result?.rows, "find siswa name", res);
  });
  console.log("find nis: ", req?.query?.nis);
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
