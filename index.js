import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
const environmentalVariables = dotenv.config();
import UserRoute from "./Routes/UserRoute.js";
import ForumCategoryRoutes from "./Routes/ForumCategoryRoute.js";
import QuestionRoutes from "./Routes/QuestionRoute.js";
import ForumCommentRoute from "./Routes/ForumCommentRoute.js";
import ForumCategoryRoute from "./Routes/ForumCategoryRoute.js";
import ForumSubCommentRoute from "./Routes/ForumSubCommentRoute.js";
const app = express();

const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type",
    "Content-Type: multipart/form-data"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});


app.use("/user", UserRoute);
app.use("/forum-category", ForumCategoryRoutes);
app.use("/forum-question", QuestionRoutes);
app.use("/forum-comment", ForumCommentRoute);
app.use("/forum-sub-comment", ForumSubCommentRoute);


app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
