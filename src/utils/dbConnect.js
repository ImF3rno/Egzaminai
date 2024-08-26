const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });

const dbConnect = async () => {
  const databaseUri =
    process.env.DATABASE ||
    "mongodb+srv://nameliukass123:Deltalt789@egzaminas.6xjkg.mongodb.net/?retryWrites=true&w=majority&appName=Egzaminas";
  const databasePassword = process.env.DATABASE_PASSWORD || "Deltalt789";

  if (!databaseUri || !databasePassword) {
    console.error(
      "DATABASE or DATABASE_PASSWORD environment variable is not set"
    );
    return;
  }
  const DB = databaseUri.replace("<password>", databasePassword);

  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

module.exports = dbConnect;
