import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUsPage from "./pages/aboutUsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/aboutus" element={<AboutUsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
