import * as forumSubCommentService from "../Services/ForumSubCommentService.js";
import * as subCommentValidationService from "./../Services/ForumSubCommentValidationService.js";
import { v4 } from "uuid";

export const createforumsubcomment = async (request, response) => {
  try {
    var isValidate =
      subCommentValidationService.SubCommentRequestBodyValidation(request.body);
    if (!isValidate.status) {
      response
        .status(400)
        .json({ status: isValidate.status, message: isValidatet.message });
      return;
    }
    request.body.id = v4();
    var result = await forumSubCommentService.createforumsubcomment(
      request.body
    );

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
      .json({ status: false, message: "Sub Comment added failed" });
  }
};

export const Getsubcomment = async (req, res) => {
  try {
    var result = await forumSubCommentService.Getsubcomment();

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

export const GetforumsubcommentbyId = async (req, res) => {
  try {
    var id = req.params.id;

    var result = await forumSubCommentService.GetforumsubcommentbyId(id);

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

export const deletesubforum = async (req, res) => {
  try {
    var result = await forumSubCommentService.deletesubforum();

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

export const DeletesubforumbyId = async (req, res) => {
  try {
    var id = req.params.id;

    var result = await forumSubCommentService.DeletesubforumbyId(id);

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
