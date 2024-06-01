
import * as QuestionRepository from './../Repositories/QuestionRepository.js';

export const  AddQuestion = async (request) => {
  try {
    const result = await QuestionRepository.AddQuestion(request);
    if(result){
        return { status: true, message: "Question created successfully" };
    }else{
        return { status: false, message: "Question creation faild" };
    }
  } catch (error) {
    throw error;
  }
};


export const GetQuestion = async () => {
  try {
    const result = await QuestionRepository.GetQuestion();
    if(result.rows.length > 0){
        return { status: true, message: "Questions get successfully",data:result.rows };
    }else{
        return { status: false, message: "No Questions available" };
    }
  } catch (error) {
    throw error;
  }
};

export const GetQuestionbyId = async (id) => {
  try {
    const result = await QuestionRepository.GetQuestionbyId(id);
     (result);
    if(result.rows.length == 1){
        return { status: true, message: "Question get successfully",data:result.rows };
    }else{
        return { status: false, message: "Question not found" };
    }
  } catch (error) {
    throw error;
  }
};

export const DeleteQuestions = async () => {
  try {
    
    var response = await QuestionRepository.DeleteQuestions();
    if (response) {
      return { status: true, message: "Questions deleted successfully" };
    } else {
      return { status: false, message: "Questions deleted faild" };
    }
  } catch (error) {
    throw error;
  }
};

export const deletequestionbyId= async (id) => {
  try {
    const result = await QuestionRepository.deletequestionbyId(id);
    if(result){
        return { status: true, message: "Question deleted successfully" };
    }else{
        return { status: false, message: "Question deletion failed" };
    }
  } catch (error) {
    throw error;
  }
};
 