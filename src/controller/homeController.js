import userService from "../service/userService";
const hanleHelloWorld = (req, res) => {
  return res.render("home.ejs");
};

const handleUserPage = async (req, res) => {
  let userList = await userService.getUserList();
  await userService.deleteUser(9);
  return res.render("user.ejs", { userList });
};
const handleCreateNewUser = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;
  userService.createNewUser(email, password, username);
  return res.redirect("/user");
};
const handleDeleteUser = async (req, res) => {
  console.log(">> check id ", req.params.id);
  await userService.deleteUser(req.params.id);
  return res.redirect("/user");
};

module.exports = {
  hanleHelloWorld,
  handleUserPage,
  handleCreateNewUser,
  handleDeleteUser,
};
