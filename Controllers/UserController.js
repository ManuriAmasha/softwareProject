import * as UserService from "../Services/UserService.js";
import { v4 } from "uuid";

export const createUser = async (request, response) => {
  try {
    request.body.id = v4();
    var result = await UserService.createUser(request.body);

    if (result.status) {
      response.status(201).json({ status: result.status, message: result.message });
      return;
    } else {
    response.status(400).json({ status: result.status, message: result.message });
      return;
    }
  } catch (error) {
     (error);
    response.status(400).json({ status: false, message: "Comment added failed" });
  }
};


export const GetUser = async (req, res) => {
  try {

    var result = await UserService.GetUser();

    if(result.status){
      return res.status(200).json({ status: result.status, message: result.message,data:result.data });
    }else{
      return res.status(200).json({ status: result.status, message: result.message });
    }
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

export const GetUserbyId= async (req, res) => {
  try {

    var id = req.params.id;

    var result = await UserService.GetUserbyId(id);

    if(result.status){
      return res.status(200).json({ status: result.status, message: result.message,data:result.data });
    }else{
      return res.status(200).json({ status: result.status, message: result.message });
    }
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

export const DeleteUser = async (req, res) => {
  try {

    var result = await UserService.DeleteUser();

    if(result.status){
      return res.status(200).json({ status: result.status, message: result.message  });
    }else{
      return res.status(200).json({status: result.status, message: result.message });
    }
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

export const DeleteUserbyId= async (req, res) => {
  try {

    var id = req.params.id;


    var result = await UserService.DeleteUserbyId(id);

    if(result.status){
      return res.status(200).json({ status: result.status, message: result.message,data:result.data });
    }else{
      return res.status(200).json({ status: result.status, message: result.message });
    }
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

















