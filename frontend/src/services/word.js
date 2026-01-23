import axios from "axios";

const API_BASE = "http://localhost:8000";

export const get_random_word = async () => {
  try {
    const response = await axios.get(`${API_BASE}/spelling_word/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching random word:", error);
  }
};

export const get_reading_words = async () => {
  try {
    const response = await axios.get(`${API_BASE}/reading_words/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching reading words: ", error);
  }
};
