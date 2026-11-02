import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  fs.readFile("service.html", (err, data) => {
    if (err) {
      return res.end("failed to load service file");
    }

    res.end(data);
  });
});

const port = 3001;

server.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`server is running on port ${port}`);
});