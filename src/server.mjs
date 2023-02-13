import express from "express";
import request from "request";
const app = express();

// Use a local proxy as a workaround for a non CORS enabled server
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Forward response
app.get("*", (req, res) => {
  request(
    "https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals"
  ).pipe(res);
});

app.listen(80, () => console.log("Listening on port 80"));
