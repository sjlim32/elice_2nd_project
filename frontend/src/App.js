import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/commons/layout";
import AboutUsPage from "./pages/aboutUsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/aboutus" element={<AboutUsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
