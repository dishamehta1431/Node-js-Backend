import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  fs.readFile("index1.html", (err, data) => {
    if (err) {
      return res.end("failed to load about file");
    }

    res.end(data);
  });
});

const port = 2006;

server.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`server is running on port ${port}`);
});