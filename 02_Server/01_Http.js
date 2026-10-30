// server is a computer system which accept the user request and as per request it will responded with neccessary action.

import http from "http";
const server = http.createServer((req, res) => {
  res.write("hello from server");
  res.end();
});

const port = 5000;

server.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`server is running on port ${port}`);
});
