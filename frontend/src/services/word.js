import axios from "axios";

const API_BASE = "http://localhost:8000";

export const get_random_word = async () => {
  try {
    const response = await axios.get(`${API_BASE}/random_word/`, {});
    return response.data;
  } catch (error) {
    console.error("Error fetching random word:", error);
  }
};
