import * as SqlQuaries from "../Utils/sqlQuaries.js";
import client from "../Configs/databaseConnection.js";

export const AddComment = async(request) => {
    try {
        return new Promise((resolve, reject) => {
          client.query(
            SqlQuaries.createForumComment,
            [
              request.id,
              request.user_id,
              request.forum_comment_body,
              request.FQuestionID,
            ],
            (err, result) => {
              if (err) {
                 (err);
                reject(false);
              } else {
                
                resolve(true);
              }
            }
          );
        });
      } catch (error) {
        throw error;
      }
};

export const GetAllComment = async()=>{
    try {
      return new Promise((resolve, reject) => {
        client.query(
          SqlQuaries.GetAllComment,
        
          (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      
    } catch (error) {
      throw error;
      
    }
  }
export const GetforumcommentbyId = async(id)=>{
    try {
      return new Promise((resolve, reject) => {
        client.query(
          SqlQuaries.GetforumcommentbyId,[id],
        
          (err, result) => {
            if (err) {
                 (err);
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      
    } catch (error) {
      throw error;
      
    }
  }

  export const Deleteforumcomment = async()=>{
    try {
      return new Promise((resolve, reject) => {
        client.query(
          SqlQuaries.Deleteforumcomment,
        
          (err, result) => {
            if (err) {
                 (err);
              reject(false);
            } else {
              resolve(true);
            }
          }
        );
      });
      
    } catch (error) {
      throw error;
      
    }
  }
  
  export const DeleteForumcommentbyId= async(id)=>{
    try {
      return new Promise((resolve, reject) => {
        client.query(
          SqlQuaries.DeleteForumcommentbyId,[id],
        
          (err, result) => {
            if (err) {
                 (err);
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      
    } catch (error) {
      throw error;
      
    }
  }
  