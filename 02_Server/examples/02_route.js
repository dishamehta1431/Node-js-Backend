import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to Online Shopping");
  } else if (req.url === "/products") {
    res.end("All products");
  } else if (req.url === "/electronics") {
    res.end("electronics products");
  } else if (req.url === "/clothes") {
    res.end("clothing collection");
  } else if (req.url === "/cart") {
    res.end("Your shopping cart");
  } else {
    res.end("Page not found");
  }
});

const port = 2004;

server.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`server is running on port ${port}`);
});
