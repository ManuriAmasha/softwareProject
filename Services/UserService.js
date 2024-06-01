import * as UserRepository from "../Repositories/UserRepository.js";

export const createUser = async (request) => {
  try {
    const result = await UserRepository.createUser(request);
    if(result){
        return { status: true, message: "User created successfully" };
    }else{
        return { status: false, message: "User creation failed" };
    }
  } catch (error) {
    throw error;
  }
};

export const GetUser = async () => {
  try {
    const result = await UserRepository.GetUser();
    if(result.rows.length > 0){
        return { status: true, message: "Users get successfully",data:result.rows };
    }else{
        return { status: false, message: "No user available" };
    }
  } catch (error) {
    throw error;
  }
};

export const GetUserbyId = async (id) => {
  try {
    const result = await UserRepository.GetUserbyId(id);
     (result);
    if(result.rows.length == 1){
        return { status: true, message: "User get successfully",data:result.rows };
    }else{
        return { status: false, message: "User not available" };
    }
  } catch (error) {
    throw error;
  }
};


export const DeleteUser = async (request) => {
  try {
    
    var response = await UserRepository.DeleteUser(request);
    if (response) {
      return { status: true, message: "Users deleted successfully" };
    } else {
      return { status: false, message: "Users deleted failed" };
    }
  } catch (error) {
    throw error;
  }
};

export const DeleteUserbyId = async (id) => {
  try {
    const result = await UserRepository.DeleteUserbyId(id);
     (result);
    if(result.rows.length == 1){
        return { status: true, message: "User deleted successfully",data:result.rows };
    }else{
        return { status: false, message: "User deleted failed" };
    }
  } catch (error) {
    throw error;
  }
};




