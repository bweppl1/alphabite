import axios from "axios";

const API_BASE = "http://localhost:8000";

// update coins
export const update_coins = async (email, coins) => {
  try {
    const response = await axios.put(
      `${API_BASE}/update_coins`,
      { email, coins },
      {
        headers: { "Content-Type": "application/json" },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error updating coins:", error);
  }
};

// update reading level
export const update_reading_level = async (email, level) => {
  try {
    const response = await axios.put(
      `${API_BASE}/update_reading_level`,
      {
        email,
        level,
      },
      { headers: { Content_Type: "application/json" } },
    );
    return response.data;
  } catch (error) {
    console.error("error updating reading level", error);
  }
};

// update spelling level
export const update_spelling_level = async (email, level) => {
  try {
    const response = await axios.put(
      `${API_BASE}/update_spelling_level`,
      {
        email,
        level,
      },
      { headers: { Content_Type: "application/json" } },
    );
    return response.data;
  } catch (error) {
    console.error("error updating spelling level", error);
  }
};
