import * as SqlQuaries from "../Utils/sqlQuaries.js";
import client from "../Configs/databaseConnection.js";

export const createUser = async(request) => {

  console.log(request)
    try {
        return new Promise((resolve, reject) => {
          client.query(
            SqlQuaries.createUser,
            [
              request.id,
              request.email,
              request.userName,
              request.password,
              request.address,
              request.contact_no,
              request.dob,
              request.gender,
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

export const GetUser = async()=>{
  try {
    return new Promise((resolve, reject) => {
      client.query(
        SqlQuaries.GetUser,
      
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
export const GetUserbyId= async(id)=>{
  try {
    return new Promise((resolve, reject) => {
      client.query(
        SqlQuaries.GetUserbyId,[id],
      
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
export const DeleteUser = async()=>{
  try {
    return new Promise((resolve, reject) => {
      client.query(
        SqlQuaries.DeleteUser,
      
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

export const DeleteUserbyId= async(id)=>{
  try {
    return new Promise((resolve, reject) => {
      client.query(
        SqlQuaries.DeleteUserbyId,[id],
      
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

