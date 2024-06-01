export const CommentRequestBodyValidation = async (request) => {
  try {
    if (!request.user_id) {
      return { status: false, message: "User id can not empty" };
    }

    if (!request.forum_comment_body) {
      return { status: false, message: "Form body can not empty" };
    }

    if (!request.FQuestionID) {
      return { status: false, message: "Question id can not empty" };
    }

    return { status: true, message: "Request valid" };
  } catch (error) {
    throw error;
  }
};
