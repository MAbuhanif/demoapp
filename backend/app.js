//import the express module
const express = require("express");
//import the mysql module
const mysql = require("mysql2");
//create an instance of the express server
const app = express();

//define the connection parameters for the database
const dbConfig = {
  connectionLimit: 10,
  host: "localhost",
  user: "demoapp",
  password: "demoapp",
  database: "demoapp",
};
//create the connection to the database
const connection = mysql.createConnection(dbConfig);
//connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log(`MySQL Connected...`);
});

//create a simple get request handler to send a response back
app.get("/", (req, res) => {
  res.send("testing");
});
//set up the port to listen to
const port = 4000;
//set up the listner
app.listen(port, () => console.log(`listning on port ${port}`));
