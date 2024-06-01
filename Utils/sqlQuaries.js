export const createUser = `INSERT INTO users(id, email, user_name, password, address, contact_no, dob, gender) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;
export const createForumCategory = `INSERT INTO ForumCategory(id, category_name) VALUES ($1, $2)`;
export const createForumComment = 'INSERT INTO forumcomment (id,user_id,forum_comment_body, FQuestionID) VALUES ($1, $2, $3,$4)';
export const createQuestion = `INSERT INTO forumquestion(id,user_id, forum_questtion_pin_status,  forum_questtion_lock_status,forum_questtion_title, forum_questtion_body,fCategoryID ) VALUES ($1, $2, $3, $4, $5,$6,$7)`;
export const createforumsubcomment = 'INSERT INTO forum_sub_comment(id,user_id,forum_sub_comment_body,FCommentID ) VALUES ($1,$2,$3,$4)';


export const GetForumCategories='SELECT * FROM forumcategory';
export const GetQuestion='SELECT * From forumquestion';
export const GetQuestionbyId=`select * from forumquestion where id = $1`;
export const GetforumcommentbyId=`select * from forumcomment where id = $1`;
export const Deleteforumcomment= 'select * From forumcomment';
export const GetforumcategorybyId='SELECT * FROM forumcategory where id = $1';
export const DeleteforumCategory= 'SELECT * FROM forumcategory';
export const GetAllComment='SELECT * FROM forumcomment';
export const DeleteQuestions='DELETE FROM forumquestion';
export const GetUser='SELECT * FROM users';
export const GetUserbyId=`select * from users where id = $1`;
export const DeleteUser=`select * from users`;
export const DeleteUserbyId=`select * from users where id = $1`;
export const DeleteForumcategorybyId=`select * from forumcategory where id = $1`;
export const DeleteForumcommentbyId=`select * from forumcomment where id = $1`;
export const DeleteQuestionbyId=`DELETE from forumquestion where id = $1`;
export const Getsubcomment= 'select * From forum_sub_comment';
export const GetforumsubcommentbyId=`select * from forum_sub_comment where id = $1`;
export const Deletesubforum= 'select * From forum_sub_comment';
export const DeletesubforumbyId= `select * from forum_sub_comment where id = $1`;









