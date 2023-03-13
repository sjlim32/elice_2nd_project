import { BrouserRouter as Router, Routes, Route, Link } from "react-router-dom";
import aboutUsPage from "./pages/aboutUsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/aboutUs" element={<aboutUsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
