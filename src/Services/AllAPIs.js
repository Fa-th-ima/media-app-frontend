// this file for all API CALLING - delete, post,update,get ...

import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI";

// Add Video API Call  => post => localhost:3000/allVideos
export const addVideoAPI = async(reqbody) =>{            //as input from the user is entered thr: reqbody
    return await commonAPI('post',`${serverURL}/allVideos`,reqbody)
}

// get all Videos (from json server) API Call => get => localhost:3000/allVideos
export const getVideoAPI = async () =>{
    return await commonAPI('get',`${serverURL}/allVideos`,"")
}

// get a particular video API Call => get => localhost:3000/allVideos/:id
export const getAVideoAPI = async(id) =>{
    return await commonAPI('get',`${serverURL}/allVideos/${id}`,"")
}

// delete a particular video API Call => delete => localhost:3000/allVideos/:id
export const deleteVideoAPI = async(id) =>{
    return await commonAPI('delete',`${serverURL}/allVideos/${id}`,"")
}

// add history API Call => post => localhost:3000/watchHistory
export const addHistoryAPI = async (videoDetails) =>{
    return await commonAPI('post',`${serverURL}/watchHistory`,videoDetails)
}


// get history API Call => get => localhost:3000/watchHistory
export const getHistoryAPI  = async () =>{
    return await commonAPI('get',`${serverURL}/watchHistory`,{})
}

// delete history API Call => localHost:3000/watchHistory/:id
export const deleteHistoryAPI = async(id) =>{
    return await commonAPI('delete',`${serverURL}/watchHistory/${id}`,{})
}

// add category API Call => post => localhost:3000/category
export const addCategoryAPI = async(categoryDetails) =>{
    return await commonAPI('post',`${serverURL}/category`,categoryDetails)
}

// get category API Call => get => localhost:3000/category
export const getCategoryAPI = async() =>{
    return await commonAPI('get',`${serverURL}/category`,"")
}

// delete category API Call => delete => localhost:3000/category/:id
export const deleteCategoryAPI = async(id) =>{
    return await commonAPI('delete',`${serverURL}/category/${id}`,"")
}

// update category API Call => put => localhost:3000/category
export const updateCategoryAPI = async(id,category) =>{
    return await commonAPI('put',`${serverURL}/category/${id}`,category)
}



