export const SubCommentRequestBodyValidation = async (request) => {
    try {
      if (!request.user_id) {
        return { status: false, message: "User id can not empty" };
      }
  
      if (!request.forum_sub_comment_body) {
        return { status: false, message: "Forum sub comment body can not empty" };
      }
  
      if (!request.FCommentID) {
        return { status: false, message: "Comment id can not empty" };
      }
  
      return { status: true, message: "Request valid" };
    } catch (error) {
      throw error;
    }
  };
  