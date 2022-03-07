const hanleHelloWorld = (req, res) => {
  return res.render("home.ejs");
};
const handleUserPage = (req, res) => {
  return res.render("user.ejs");
};
module.exports = {
  hanleHelloWorld,
  handleUserPage,
};
