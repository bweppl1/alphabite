import axios from "axios";

const API_BASE = "http://localhost:8000";

// get random words for all reading, spelling - return id, word, emoji, ?tags
export const get_random_word = async () => {
  try {
    const response = await axios.get(`${API_BASE}/random_word/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching random word:", error);
  }
};

// get decoy words for reading game - returns id, word
export const get_decoy_word = async (used_words) => {
  try {
    const response = await axios.post(`${API_BASE}/decoy_word/`, used_words, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching reading words: ", error);
  }
};
