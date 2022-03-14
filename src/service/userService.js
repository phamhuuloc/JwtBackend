import mysql from "mysql2/promise";
import bluebird from "bluebird";
import bcrypt from "bcryptjs/dist/bcrypt";

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const hashUserPassword = (password) => {
  // Store hash in your password DB.
  let hashPassword = bcrypt.hashSync(password, salt);
  return hashPassword;
};

const createNewUser = async (email, password, username) => {
  let hashPass = hashUserPassword(password);
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwtBackend",
    Promise: bluebird,
  });
  try {
    const [rows, fields] = await connection.execute(
      "insert into User (email,password,username) values(?,?,?)",
      [email, hashPass, username]
    );
    return rows;
  } catch (error) {
    console.log(error);
  }
};

const getUserList = async () => {
  let users = [];
  // create the connection, specify bluebird as Promise
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwtBackend",
    Promise: bluebird,
  });
  try {
    const [rows, fields] = await connection.execute("select * from User");
    console.log(rows);
    return rows;
  } catch (error) {
    console.log(error);
  }
};
const deleteUser = async (id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwtBackend",
    Promise: bluebird,
  });
  try {
    const [rows, fields] = await connection.execute(
      "delete from User where id=?",
      [id]
    );
    return rows;
  } catch (error) {
    console.log(error);
  }
};
const getUserById = async (id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwtBackend",
    Promise: bluebird,
  });
  try {
    const [rows, fields] = await connection.execute(
      "select * from User where id=?",
      [id]
    );
    return rows;
  } catch (error) {
    console.log(error);
  }
};
const updateUserInfo = async (email, username, id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwtBackend",
    Promise: bluebird,
  });
  try {
    const [rows, fields] = await connection.execute(
      "update User set User.email=? , User.username=?, where User.id= ?",
      [email, username, id],
      [id]
    );
    return rows;
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  createNewUser,
  getUserList,
  deleteUser,
  getUserById,
  updateUserInfo,
};
