import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to city hospital");
  } else if (req.url === "/doctors") {
    res.end("Available doctors");
  } else if (req.url === "/patients") {
    res.end("Patient details");
  } else if (req.url === "/appoinment") {
    res.end("book your appoinments");
  } else if (req.url === "/services") {
    res.end("hospital services");
  } else if (req.url === "/emergency") {
    res.end("emergency department");
  } else {
    res.end("route not found");
  }
});
const port = 2007;

server.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`server is running on port ${port}`);
});
