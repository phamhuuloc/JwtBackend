const { Sequelize } = require("sequelize");
// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("jwtBackend", "root", null, {
  host: "localhost",
  dialect: "mysql",
});

const checkConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
export default checkConnection;
