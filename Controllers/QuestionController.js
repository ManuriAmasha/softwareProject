import * as QuestionService from "../Services/QuestionService.js";
import * as CategoryService from "./../Services/ForumCategoryServices.js";
import * as QuestionValidationService from "./../Services/QuestionValidationService.js";
import { v4 } from "uuid";

export const AddQuestion = async (request, response) => {
  try {
    var isValidate =
      await QuestionValidationService.QuestionRequestBodyValidation(request);

    if (!isValidate.status) {
      response
        .status(400)
        .json({ status: isValidate.status, message: isValidate.message });
      return;
    }

    var category = await CategoryService.getForumCategorybyid(request.body.fCategoryID);
    
    if (!category.status) {
      response
        .status(404)
        .json({ status: category.status, message: category.message });
      return;
    }

    request.body.id = v4();
    var result = await QuestionService.AddQuestion(request.body);

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
    response.status(400).json({ status: false, message: error.message });
  }
};

export const GetQuestion = async (req, res) => {
  try {
    var result = await QuestionService.GetQuestion();

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
        .status(400)
        .json({ status: result.status, message: result.message });
    }
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};
export const GetQuestionbyId = async (req, res) => {
  try {
    var id = req.params.id;


    var result = await QuestionService.GetQuestionbyId(id);

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
        .status(404)
        .json({ status: result.status, message: result.message });
    }
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

export const DeleteQuestions = async (req, res) => {
  try {
    var result = await QuestionService.DeleteQuestions();

    if (result.status) {
      return res
        .status(200)
        .json({ status: result.status, message: result.message });
    } else {
      return res
        .status(400)
        .json({ status: result.status, message: result.message });
    }
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

export const deletequestionbyId = async (req, res) => {
  try {
    var id = req.params.id;

    var isQuestionAvailable = await QuestionService.GetQuestionbyId(id);
    if(!isQuestionAvailable.status){
       res.status(404).json({ status: isQuestionAvailable.status, message: isQuestionAvailable.message });
    }
   

    var result = await QuestionService.deletequestionbyId(id);

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
