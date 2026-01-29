import { createContext } from "react";

import { loginUser, registerUser, getUserData } from "../services/user";

const AuthContext = createContext();
