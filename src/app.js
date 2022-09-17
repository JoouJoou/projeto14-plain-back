import express from "express";
import cors from "cors";
import router from "./routers/index.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(router);

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});
