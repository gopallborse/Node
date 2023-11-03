const http = require("http");
// const fs = require("fs"); // not required as the relevant code moved to 004_routes.js

const routes = require("./004_routes");

// function requestListener(req, res) {
//     // code
// }
// http.createServer(requestListener);

// http.createServer(function(req, res) {
//     // code
// });

// const server = http.createServer((req, res) => {
//   // console.log(req);
//   // console.log(req.url, req.method, req.headers);
//   // process.exit();

//   // following code moved to 004_routes.js
//   // const url = req.url;
//   // const method = req.method;
//   // if (url === "/") {
//   //   res.write("<html>");
//   //   res.write("<head><title>Enter Message</title></head>");
//   //   res.write(
//   //     "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
//   //   );
//   //   res.write("</head>");
//   //   return res.end();
//   // }
//   // if (url === "/message" && method === "POST") {
//   //   const body = [];
//   //   req.on("data", (chunk) => {
//   //     // console.log(chunk);
//   //     body.push(chunk);
//   //   });
//   //   return req.on("end", () => {
//   //     fs.writeFileSync("003_001.txt", "DUMMY");
//   //     const parsedBody = Buffer.concat(body).toString();
//   //     // console.log(parsedBody);
//   //     const message = parsedBody.split("=")[1];
//   //     // fs.writeFileSync("003_001.txt", message); // writeFileSync blocks execution of the next lines of code until writeFileSync operation is done, so use writeFile instead
//   //     fs.writeFile("003_001.txt", message, (err) => {
//   //       // this callback function is for error handling, the following 3 lines of code have nothing to do with error handling
//   //       res.statusCode = 302;
//   //       res.setHeader("Location", "/");
//   //       return res.end();
//   //     });
//   //   });
//   // }
//   //   res.setHeader("Content-Type", "text/html");
//   //   res.write("<html>");
//   //   res.write("<head><title>My First Page</title></head>");
//   //   res.write("<body><h1>Hello there!</h1></body>");
//   //   res.write("</head>");
//   //   res.end();
// });

const server = http.createServer(routes)

// const server = http.createServer(routes.handler);

server.listen(3000);
