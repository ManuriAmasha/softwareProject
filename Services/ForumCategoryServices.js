
import * as ForumCategoryRepository from './../Repositories/ForumCategoryRepository.js';

export const CreateForumCategory = async (request) => {
  try {
    const result = await ForumCategoryRepository.CreateForumCategory(request);
    if(result){
        return { status: true, message: "Category created successfully" };
    }else{
        return { status: false, message: "Category creation faild" };
    }
  } catch (error) {
    throw error;
  }
};


export const getForumCategories = async () => {
  try {
    const result = await ForumCategoryRepository.GetForumCategories();
    if(result.rows.length > 0){
        return { status: true, message: "Categories get successfully",data:result.rows };
    }else{
        return { status: false, message: "No category available" };
    }
  } catch (error) {
    throw error;
  }
};

export const getForumCategorybyid = async (id) => {
  try {
    const result = await ForumCategoryRepository.GetforumcategorybyId(id);
     
    if(result.rows.length == 1){
        return { status: true, message: "Category get successfully",data:result.rows };
    }else{
        return { status: false, message: "Category not found" };
    }
  } catch (error) {
    throw error;
  }
};

export const DeleteforumCategory = async (request) => {
  try {
    
    var response = await ForumCategoryRepository.DeleteforumCategory(request);
    if (response) {
      return { status: true, message: "Categories deleted successfully" };
    } else {
      return { status: false, message: "Categories deleted faild" };
    }
  } catch (error) {
    throw error;
  }
};

export const DeleteForumcategorybyId= async (id) => {
  try {
    const result = await ForumCategoryRepository.DeleteForumcategorybyId(id);
     (result);
    if(result.rows.length == 1){
        return { status: true, message: "Category deleted successfully",data:result.rows };
    }else{
        return { status: false, message: "Category deleted failed" };
    }
  } catch (error) {
    throw error;
  }
};
  
