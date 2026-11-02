import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  fs.readFile("contact.html", (err, data) => {
    if (err) {
      return res.end("failed to load contact file");
    }

    res.end(data);
  });
});

const port = 3008;

server.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`server is running on port ${port}`);
});