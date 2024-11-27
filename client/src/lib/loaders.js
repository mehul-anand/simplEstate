import { defer } from "react-router-dom";
import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequest("/posts/" + params.id);
  return res.data;
};

export const listPageLoader = async ({ request, params }) => {
  // console.log("request: ",request);
  const query = request.url.split("?")[1];
  console.log("query:",query)
  const postPromise = apiRequest("/posts?" + query);
  return defer({
    postResponse: postPromise,
  });
};

export const profilePageLoader = async () => {
  try {
    const postPromise = apiRequest("/user/profilePosts");
    const chatPromise = apiRequest("/chats");

    return defer({
      postResponse: postPromise,
      chatResponse: chatPromise,
    });
  } catch (error) {
    console.error("Error in profilePageLoader:");
    if (error.response) {
      // Server responded with a status code outside the 2xx range
      console.error("Response Status:", error.response.status);
      console.error("Response Data:", error.response.data);
      console.error("Response Headers:", error.response.headers);
    } else if (error.request) {
      // Request was made, but no response was received
      console.error("No Response:", error.request);
    } else {
      // Error setting up the request
      console.error("Axios Setup Error:", error.message);
    }
    throw error; // Re-throw the error to let React Router handle it
  }
};

