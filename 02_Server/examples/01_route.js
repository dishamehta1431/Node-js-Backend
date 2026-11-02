import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to Student management");
  } else if (req.url === "/students") {
    res.end("All Students");
  } else if (req.url === "/add-student") {
    res.end("add new student");
  } else if (req.url === "/courses") {
    res.end("available courses");
  } else if (req.url === "/result") {
    res.end("student results");
  } else {
    res.end("route not found!!");
  }
});

const port = 2008;

server.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`server is running on port ${port}`);
});
