import * as ForumSubCommentRepository from "../Repositories/ForumSubCommentRepository.js";

export const createforumsubcomment = async (request) => {
    try {
      
      var response = await ForumSubCommentRepository.createforumsubcomment(request);
      if (response) {
        return { status: true, message: "Sub comment added successfully" };
      } else {
        return { status: false, message: "Sub comment added faild" };
      }
    } catch (error) {
      throw error;
    }
  };

  export const Getsubcomment= async () => {
    try {
      const result = await ForumSubCommentRepository.Getsubcomment();
      if(result.rows.length > 0){
          return { status: true, message: "Sub comments get successfully",data:result.rows };
      }else{
          return { status: false, message: "No sub comments available" };
      }
    } catch (error) {
      throw error;
    }
  };

  export const GetforumsubcommentbyId= async (id) => {
    try {
      const result = await ForumSubCommentRepository.GetforumsubcommentbyId(id);
       (result);
      if(result.rows.length == 1){
          return { status: true, message: "Sub comment get successfully",data:result.rows };
      }else{
          return { status: false, message: "Sub comment available" };
      }
    } catch (error) {
      throw error;
    }
  };

  export const deletesubforum= async (request) => {
    try {
      
      var response = await ForumSubCommentRepository.deletesubforum(request);
      if (response) {
        return { status: true, message: "Sub comments deleted successfully" };
      } else {
        return { status: false, message: "Sub comments deleted failed" };
      }
    } catch (error) {
      throw error;
    }
  };

  export const DeletesubforumbyId= async (id) => {
    try {
      const result = await ForumSubCommentRepository.DeletesubforumbyId(id);
       (result);
      if(result.rows.length == 1){
          return { status: true, message: "Sub comment deleted successfully",data:result.rows };
      }else{
          return { status: false, message: "Sub comment deleted failed" };
      }
    } catch (error) {
      throw error;
    }
  };