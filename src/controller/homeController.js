// get the client
import mysql from "mysql2";
// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "jwtBackend",
});

const hanleHelloWorld = (req, res) => {
  return res.render("home.ejs");
};

const handleUserPage = (req, res) => {
  return res.render("user.ejs");
};

const handleCreateNewUser = (req, res) => {
  console.log(req.body);
  // connection.query(
  //   "insert into users (email,password,username) values(?,?,?)",
  //   [email, password, username],
  //   function (err, results, fields) {
  //     if (err) {
  //       console.log(err);
  //     }
  //     console.log(results); // results contains rows returned by server
  //     console.log(fields); // fields contains extra meta data about results, if available
  //   }
  // );
  return res.send("handle create new user");
};

module.exports = {
  hanleHelloWorld,
  handleUserPage,
  handleCreateNewUser,
};
