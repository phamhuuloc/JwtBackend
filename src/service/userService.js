import mysql from "mysql2/promise";
import bluebird from "bluebird";
import bcrypt from "bcryptjs/dist/bcrypt";
import db from "../models/index";
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const hashUserPassword = (password) => {
  // Store hash in your password DB.
  let hashPassword = bcrypt.hashSync(password, salt);
  return hashPassword;
};

const createNewUser = async (email, password, username) => {
  let hashPass = hashUserPassword(password);
  try {
    await db.User.create({
      email: email,
      password: hashPass,
      username: username,
    });
  } catch (error) {
    console.log(error);
  }
};

const getUserList = async () => {
  let users = [];
  users = await db.User.findAll();
  return users;
};
const deleteUser = async (userId) => {
  await db.User.destroy({
    where: { id: userId },
  });
};
const getUserById = async (id) => {
  let user = await db.User.findOne({
    where: { id: id },
  });
  return (user = user.get({ plain: true }));
  // console.log("check user", user);
  // const connection = await mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   database: "jwtBackend",
  //   Promise: bluebird,
  // });
  // try {
  //   const [rows, fields] = await connection.execute(
  //     "select * from User where id=?",
  //     [id]
  //   );
  //   return rows;
  // } catch (error) {
  //   console.log(error);
  // }
};
const updateUserInfo = async (email, username, id) => {
  await db.User.update(
    {
      email: email,
      username: username,
    },
    {
      where: { id: id },
    }
  );
  // const connection = await mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   database: "jwtBackend",
  //   Promise: bluebird,
  // });
  // try {
  //   const [rows, fields] = await connection.execute(
  //     "update User set User.email=? , User.username=?, where User.id= ?",
  //     [email, username, id],
  //     [id]
  //   );
  //   return rows;
  // } catch (error) {
  //   console.log(error);
  // }
};
module.exports = {
  createNewUser,
  getUserList,
  deleteUser,
  getUserById,
  updateUserInfo,
};
