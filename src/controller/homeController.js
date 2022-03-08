import userService from "../service/userService";
const hanleHelloWorld = (req, res) => {
  return res.render("home.ejs");
};

const handleUserPage = (req, res) => {
  return res.render("user.ejs");
};

const handleCreateNewUser = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;

  // userService.createNewUser(email, password, username);
  userService.getUserList();
  return res.send("handle create new user");
};

module.exports = {
  hanleHelloWorld,
  handleUserPage,
  handleCreateNewUser,
};
