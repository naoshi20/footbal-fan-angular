const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(
  express.static("public", {
    setHeaders: (res, path, stat) => {
      res.header("X-Frame-Options", "SAMEORIGIN");
    },
  })
);

app.get("/csp", (req, res) => {
  res.header(
    "Content-Security-Policy",
    `script-src 'nonce-' 'strict-dynamic';` +
      "object-src 'none';" +
      "base-uri 'none';" // strict-dynamicを追加することで動的にスクリプト要素を生成することが可能となる
  ); // CSPが有効になるためインラインスクリプトが実行されなくなる
  res.render("csp", { nonce: "nonceValue" });
});

app.post("/signup", (req, res) => {
  res.send("アカウント登録しました");
});

app.listen(port, () => {
  console.log(`Server is running on https://localhost:${port}`);
});

const https = require("https");
// const fs = require("fs");

const HTTPS_PORT = 443;
https
  .createServer({
    // key: fs.readFileSync("localhost+1-key.pem"),
    // cert: fs.readFileSync("localhost+1.pem"),
    app,
  })
  .listen(HTTPS_PORT, function () {
    console.log(`Server is running on https://localhost:${HTTPS_PORT}`);
  });
