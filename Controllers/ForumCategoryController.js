import * as ForumCategoryService from './../Services/ForumCategoryServices.js';
import { v4 } from "uuid";

export const CreateForumCategory = async (request, response) => {

  try {
    request.body.id = v4();
    var result = await ForumCategoryService.CreateForumCategory(request.body);

    if (result.status) {
      response.status(201).json({ status: result.status, message: result.message });
      return;
    } else {
    response.status(400).json({ status: result.status, message: result.message });
      return;
    }
  } catch (error) {

    response.status(400).json({ status: false, message: "Category added failed" });
  }
};

export const GetForumCategories = async (req, res) => {
  try {

    var result = await ForumCategoryService.getForumCategories();

    if(result.status){
      return res.status(200).json({ status: result.status, message: result.message,data:result.data });
    }else{
      return res.status(200).json({ status: result.status, message: result.message });
    }
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

export const GetforumcategorybyId = async (req, res) => {
  try {

    var id = req.params.id;



    var result = await ForumCategoryService.getForumCategorybyid(id);

    if(result.status){
      return res.status(200).json({ status: result.status, message: result.message,data:result.data });
    }else{
      return res.status(200).json({ status: result.status, message: result.message });
    }
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

export const DeleteforumCategory = async (req, res) => {
  try {

    var result = await ForumCategoryService.DeleteforumCategory();

    if(result.status){
      return res.status(200).json({ status: result.status, message: result.message  });
    }else{
      return res.status(200).json({status: result.status, message: result.message });
    }
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

export const DeleteForumcategorybyId = async (req, res) => {
  try {

    var id = req.params.id;


    var result = await ForumCategoryService.DeleteForumcategorybyId(id);

    if(result.status){
      return res.status(200).json({ status: result.status, message: result.message,data:result.data });
    }else{
      return res.status(200).json({ status: result.status, message: result.message });
    }
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

