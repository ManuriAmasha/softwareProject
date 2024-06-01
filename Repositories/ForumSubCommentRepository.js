import * as SqlQuaries from "../Utils/sqlQuaries.js";
import client from "../Configs/databaseConnection.js";

export const createforumsubcomment = async(request) => {
    try {
        return new Promise((resolve, reject) => {
          client.query(
            SqlQuaries.createforumsubcomment,
            [
              request.id,
              request.user_id,
              request.forum_sub_comment_body,
              request.FCommentID,
            ],
            (err, result) => {
              if (err) {
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

export const Getsubcomment= async()=>{
  try {
    return new Promise((resolve, reject) => {
      client.query(
        SqlQuaries.Getsubcomment,
      
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

export const GetforumsubcommentbyId= async(id)=>{
  try {
    return new Promise((resolve, reject) => {
      client.query(
        SqlQuaries.GetforumsubcommentbyId,[id],
      
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

export const deletesubforum= async()=>{
  try {
    return new Promise((resolve, reject) => {
      client.query(
        SqlQuaries.Deletesubforum,
      
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

export const DeletesubforumbyId = async(id)=>{
  try {
    return new Promise((resolve, reject) => {
      client.query(
        SqlQuaries.DeletesubforumbyId,[id],
      
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

