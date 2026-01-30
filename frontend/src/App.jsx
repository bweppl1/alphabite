import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ReadingGame from "./pages/ReadingGame";
import SpellingGame from "./pages/SpellingGame";
import Stats from "./pages/Stats";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthProvider from "./context/AuthContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reading_game" element={<ReadingGame />} />
          <Route path="/spelling_game" element={<SpellingGame />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
