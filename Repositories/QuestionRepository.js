import * as SqlQuaries from "../Utils/sqlQuaries.js";
import client from "../Configs/databaseConnection.js";

export const AddQuestion = async (request) => {
  try {
    return new Promise((resolve, reject) => {
      client.query(
        SqlQuaries.createQuestion,
        [
          request.id,
          request.user_id,
          request.forum_questtion_pin_status,
          request.forum_questtion_lock_status,
          request.forum_questtion_title,
          request.forum_questtion_body,
          request.fCategoryID,
        ],

        (err, result) => {
          if (err) {
            reject(err);
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
export const GetQuestion = async () => {
  try {
    return new Promise((resolve, reject) => {
      client.query(
        SqlQuaries.GetQuestion,

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
};

export const GetQuestionbyId = async (id) => {
  try {
    return new Promise((resolve, reject) => {
      client.query(
        SqlQuaries.GetQuestionbyId,
        [id],

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
};

export const DeleteQuestions = async () => {
  try {
    return new Promise((resolve, reject) => {
      client.query(SqlQuaries.DeleteQuestions, (err, result) => {
        if (err) {
          
          reject(err);
          
        } else {
          resolve(true);
        }
      });
    });
  } catch (error) {
    throw error;
  }
};

export const deletequestionbyId = async (id) => {
  try {
    return new Promise((resolve, reject) => {
      client.query(
        SqlQuaries.DeleteQuestionbyId,
        [id],

        (err, result) => {
          if (err) {
            reject(err);
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
