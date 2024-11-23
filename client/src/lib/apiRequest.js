import axios from "axios";

const apiRequest = axios.create({
  baseURL: "http://localhost:8800/api",
  withCredentials: true,
});

// Add error interceptor for debugging
apiRequest.interceptors.response.use(
  (response) => response, // Let successful responses pass through
  (error) => {
    // Log error details
    console.error("Error in API Request:");
    if (error.response) {
      console.error("Response Status:", error.response.status);
      console.error("Response Data:", error.response.data);
    } else if (error.request) {
      console.error("No Response:", error.request);
    } else {
      console.error("Axios Setup Error:", error.message);
    }
    throw error; // Re-throw error for further handling
  }
);

export default apiRequest;
