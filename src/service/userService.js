// get the client
import mysql from "mysql2";
import bcrypt from "bcryptjs/dist/bcrypt";
// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "jwtBackend",
});

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const hashUserPassword = (password) => {
  // Store hash in your password DB.
  let hashPassword = bcrypt.hashSync(password, salt);
  return hashPassword;
};
const createNewUser = (email, password, username) => {
  let hashPass = hashUserPassword(password);
  connection.query(
    "insert into users (email,password,username) values(?,?,?)",
    [email, hashPass, username],
    function (err, results, fields) {
      if (err) {
        console.log(err);
      }
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );
};
const getUserList = () => {
  let users = [];
  connection.query("select * from users", function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    console.log("check result>> ", results);
  });
};
module.exports = {
  createNewUser,
  getUserList,
};
