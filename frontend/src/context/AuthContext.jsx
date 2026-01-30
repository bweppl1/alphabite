import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState("");
  const [token, setToken] = useState(localStorage.getItem("site") || "");

  const API_BASE = "http://localhost:8000";
  const navigate = useNavigate(); // navigation post auth action

  // login or register based on type of auth action
  const authAction = async (user_data, action_type) => {
    try {
      const response = await fetch(`${API_BASE}/auth/${action_type}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user_data),
      });
      const res = await response.json();
      if (res.user_data) {
        setUser(res.user_data);
        setToken(res.token);
        localStorage.setItem("site", res.token);
        navigate("/stats");
        return;
      }
    } catch (error) {
      console.error("Error with authentication attempt", error);
    }
    setLoading(false);
  };

  // logout function, reset states and clear localStorage
  const logOut = () => {
    setUser("");
    setToken("");
    localStorage.removeItem("site");
    navigate("/site");
    setLoading(false);
  };

  // token functions
  // check for user on initial render with token
  useEffect(() => {
    const storedToken = localStorage.getItem("site");
    if (storedToken) {
      fetchUserWithToken(storedToken);
    }
  }, []);

  // if token exists, check for valid user, else clear token
  const fetchUserWithToken = async (storedToken) => {
    try {
      const response = await fetch(`{API_BASE}/auth/me`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });
      if (response.ok) {
        const user_data = await response.json();
        setUser(user_data);
        setToken(storedToken);
      } else {
        localStorage.removeItem("site");
      }
    } catch (error) {
      console.error("Error re: token", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider
      value={(user, token, authAction, logOut, fetchUserWithToken)}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
