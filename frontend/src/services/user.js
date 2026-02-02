import axios from "axios";

const API_BASE = "http://localhost:8000";

// update reading points
export const update_reading_points = async (email, points) => {
  try {
    const response = axios.put(
      `${API_BASE}/user/update_reading_points`,
      email,
      points,
      {
        headers: { "Content-Type": "application/json" },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error updating reading points:", error);
  }
};

// update spellings points

// update badges
