import * as ForumCommentService from "../Services/ForumCommentService.js";
import * as QuestionService from "./../Services/QuestionService.js";
import * as CommentValidationService from "./../Services/CommentValidationService.js";
import { v4 } from "uuid";

export const AddComment = async (request, response) => {
  try {
    var isRequestValid =
      await CommentValidationService.CommentRequestBodyValidation(request.body);

    if (!isRequestValid.status) {
      response
        .status(400)
        .json({
          status: isRequestValid.status,
          message: isRequestValid.message,
        });
      return;
    }

    var isQuesTionExist = await QuestionService.GetQuestionbyId(
      request.body.FQuestionID
    );

    if (!isQuesTionExist.status) {
      response
        .status(404)
        .json({ status: isQuesTionExist.status, message: isQuesTionExist.m });
      return;
    }

    request.body.id = v4();
    var result = await ForumCommentService.AddComment(request.body);

    if (result.status) {
      response
        .status(201)
        .json({ status: result.status, message: result.message });
      return;
    } else {
      response
        .status(400)
        .json({ status: result.status, message: result.message });
      return;
    }
  } catch (error) {
    error;
    response
      .status(400)
      .json({ status: false, message: "Comment added failed" });
  }
};

export const GetforumcommentbyId = async (req, res) => {
  try {
    var id = req.params.id;

    var result = await ForumCommentService.GetforumcommentbyId(id);

    if (result.status) {
      return res
        .status(200)
        .json({
          status: result.status,
          message: result.message,
          data: result.data,
        });
    } else {
      return res
        .status(200)
        .json({ status: result.status, message: result.message });
    }
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

export const GetAllComment = async (req, res) => {
  try {
    var result = await ForumCommentService.GetAllComment();

    if (result.status) {
      return res
        .status(200)
        .json({
          status: result.status,
          message: result.message,
          data: result.data,
        });
    } else {
      return res
        .status(200)
        .json({ status: result.status, message: result.message });
    }
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};
export const Deleteforumcomment = async (req, res) => {
  try {
    var result = await ForumCommentService.Deleteforumcomment();

    if (result.status) {
      return res
        .status(200)
        .json({ status: result.status, message: result.message });
    } else {
      return res
        .status(200)
        .json({ status: result.status, message: result.message });
    }
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

export const DeleteForumcommentbyId = async (req, res) => {
  try {
    var id = req.params.id;

    var result = await ForumCommentService.DeleteForumcommentbyId(id);

    if (result.status) {
      return res
        .status(200)
        .json({
          status: result.status,
          message: result.message,
          data: result.data,
        });
    } else {
      return res
        .status(200)
        .json({ status: result.status, message: result.message });
    }
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};
