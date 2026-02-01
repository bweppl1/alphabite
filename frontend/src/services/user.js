import axios from "axios";

const API_BASE = "http://localhost:8000";

// get reading points
export const get_reading_points = async () => {
  try {
    const response = axios.get(`${API_BASE}/user/get_reading_points`);
    return response.data;
  } catch (error) {
    console.error("Error getting reading points:", error);
  }
};

// update reading points
export const update_reading_points = async (points) => {
  try {
    const response = axios.post(
      `${API_BASE}/user/update_reading_points`,
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

// get spelling points

// update spellings points

// get badges

// update badges
