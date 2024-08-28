// this file is for CONFIGURATION of the API which will be used for api calling 

// import axios (for api fetching)   in node js 
import axios from 'axios'

// API Configuration
// API Configuration involves setting up all the necessary parameters and settings required to interact with an API.
// This includes the base URL, endpoints, HTTP methods, headers, authentication, query parameters, request body, timeouts, error handling, and environment variables.

export const commonAPI = async(httpMethod,url,reqBody)=>{

    // commonAPI, is designed to make HTTP requests using Axios in a flexible and reusable way.
    //  This function can handle different HTTP methods (GET, POST, PUT, DELETE, etc.), and it can be used to interact with any API endpoint by simply passing the necessary parameters.


    // reqConfig is an object that contains the configuration for the Axios request
    // Axios constructs the HTTP request using the properties from reqConfig.

    // add vdo => method:post, url:localhost:3000/allvideos, data: caption, image, url
    let reqConfig = {
        method:httpMethod,    //The HTTP method (GET, POST, etc.)
        url,                  //The API endpoint URL
        data:reqBody          // The request body (for POST, PUT, etc.)
    }

    return await axios(reqConfig)
    .then((response) =>{
        return response
    })
    .catch((error) =>{
        return error
    })
}

