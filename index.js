const express = require("express");
const app1 = express();
const app2 = express();
const app3 = express();

// Serve your HTML file
app1.use(express.static("test1")); // Directory where your HTML file is located
app2.use(express.static("test2"));
app3.use(express.static("test3"));

// Start the first server on port 3000
app1.listen(7000, () => {
  console.log("Server running on http://localhost:7000");
});

// Start the second server on port 4000
app2.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});

app3.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
