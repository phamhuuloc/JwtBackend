import userService from "../service/userService";
const hanleHelloWorld = (req, res) => {
  return res.render("home.ejs");
};

const handleUserPage = async (req, res) => {
  let userList = await userService.getUserList();
  console.log(">> check user list :", userList);
  return res.render("user.ejs", { userList });
};

const handleCreateNewUser = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;

  userService.createNewUser(email, password, username);
  return res.send("handle create new user");
};

module.exports = {
  hanleHelloWorld,
  handleUserPage,
  handleCreateNewUser,
};
