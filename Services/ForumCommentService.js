import * as ForumCommentRepository from "../Repositories/ForumCommentRepository.js";


export const AddComment = async (request) => {
  try {
    
    var response = await ForumCommentRepository.AddComment(request);
    if (response) {
      return { status: true, message: "Comment added successfully" };
    } else {
      return { status: false, message: "Comment added faild" };
    }
  } catch (error) {
    throw error;
  }
};


export const GetAllComment = async () => {
    try {
      const result = await ForumCommentRepository.GetAllComment();
      if(result.rows.length > 0){
          return { status: true, message: "Comments get successfully",data:result.rows };
      }else{
          return { status: false, message: "No Comments available" };
      }
    } catch (error) {
      throw error;
    }
  };
  
export const GetforumcommentbyId = async (id) => {
    try {
      const result = await ForumCommentRepository.GetforumcommentbyId(id);
       (result);
      if(result.rows.length == 1){
          return { status: true, message: "Forum comment get successfully",data:result.rows };
      }else{
          return { status: false, message: "No Forum comment available" };
      }
    } catch (error) {
      throw error;
    }
  };

export const Deleteforumcomment = async (request) => {
    try {
      
      var response = await ForumCommentRepository.Deleteforumcomment(request);
      if (response) {
        return { status: true, message: "Comments deleted successfully" };
      } else {
        return { status: false, message: "Comments deleted faild" };
      }
    } catch (error) {
      throw error;
    }
  };

  export const DeleteForumcommentbyId= async (id) => {
    try {
      const result = await ForumCommentRepository.DeleteForumcommentbyId(id);
       (result);
      if(result.rows.length == 1){
          return { status: true, message: "Comment deleted successfully",data:result.rows };
      }else{
          return { status: false, message: "Comment deleted failed" };
      }
    } catch (error) {
      throw error;
    }
  };

