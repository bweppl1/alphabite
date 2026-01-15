import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ReadingGame from "./pages/ReadingGame";
import Stats from "./pages/Stats";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reading_game" element={<ReadingGame />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
