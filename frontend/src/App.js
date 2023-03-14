import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/commons/layout";
import AboutUsPage from "./pages/aboutUsPage";
import AboutViolencePage from "./pages/aboutViolencePage";
import Campaigns from './pages/campaigns';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/aboutdomesticviolence" element={<AboutViolencePage />} />
          <Route path="/campaigns" element={<Campaigns />} />        
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
