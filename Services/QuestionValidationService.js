export const QuestionRequestBodyValidation = async (request) => {
    try {

        if(request.body.forum_question_pin_status !== true && request.body.forum_question_pin_status !== false){
            return { status: false, message:"forum_question_pin_status should be true or false" };
          }
    
          if(request.body.forum_question_lock_status !== true && request.body.forum_question_lock_status !== false){
            return { status: false, message:"forum_question_lock_status should be true or false" };
 
          }
    
          if(!request.body.forum_question_title){
           return { status: false, message:"forum_question_title can't be empty" };
          }
    
          if(!request.body.forum_question_body){
            return { status: false, message:"forum_question_body can't be empty" };
          }

          if(!request.body.fCategoryID){
            return { status: false, message:"CategoryID can't be empty" };
          }

          return { status: true, message:"Request valid" };

    } catch (error) {
      throw error;
    }
  };