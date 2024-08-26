const express = require("express");
const dbConnect = require("./utils/dbConnect");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config({ path: "config.env" });
const app = express();
const userRouter = require("./routes/user/user.routers");
const menuRouter = require("./routes/menu/menu.routers");
const lunchChoiceRouter = require("./routes/lunchChoice/lunchChoice.routers");

app.use(express.json());
app.use('/user', userRouter);
app.use('/menu', menuRouter);
app.use('/lunchChoice', lunchChoiceRouter);

// root route
app.get('/', (req, res) => {
    res.send("office lunch menu management server");
})

app.use(cors());
const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await dbConnect();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
}

startServer();
