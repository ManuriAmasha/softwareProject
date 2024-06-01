import * as SqlQuaries from "../Utils/sqlQuaries.js";
import client from "../Configs/databaseConnection.js";
import { request } from "express";

export const CreateForumCategory = async(request) => {
    try {
        return new Promise((resolve, reject) => {
          client.query(
            SqlQuaries.createForumCategory,
            [
              request.id,
              request.category_name,
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

export const GetForumCategories = async()=>{
  try {
    return new Promise((resolve, reject) => {
      client.query(
        SqlQuaries.GetForumCategories,
      
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
export const GetforumcategorybyId = async(id)=>{
  try {
    return new Promise((resolve, reject) => {
      client.query(
        SqlQuaries.GetforumcategorybyId,[id],
      
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

export const DeleteforumCategory = async()=>{
  try {
    return new Promise((resolve, reject) => {
      client.query(
        SqlQuaries.DeleteforumCategory,
      
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

export const DeleteForumcategorybyId = async(id)=>{
  try {
    return new Promise((resolve, reject) => {
      client.query(
        SqlQuaries.DeleteForumcategorybyId,[id],
      
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