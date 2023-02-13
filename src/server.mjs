import express from "express";
import request from "request";
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  const url = "https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals";

  // Forward response
  request(url).pipe(res);
});

app.listen(80, function () {
  console.log("Listening on port 80");
});
