import axios from "axios";

const API_BASE = "http://localhost:8000";

// login user
export const loginUser = async () => {
  try {
    const response = axios.post();
  } catch (error) {
    console.error("Error with login:", error);
  }
};

// register user
export const registerUser = async () => {
  try {
    const response = axios.post();
  } catch (error) {
    console.error("Error registering:", error);
  }
};

// fetchUserData
export const fetchUserData = async () => {
  try {
    const response = axios.get();
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};
