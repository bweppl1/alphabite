import axios from "axios";

const API_BASE = "http://localhost:8000";

// update reading points
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

// update spellings points

// update badges
