import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/commons/layout";
import {
  MainPage,
  AboutUsPage,
  AboutDomesticeViolencePage,
  CommunityPage,
  PostPage,
  CounselingCenterPage,
  CampaignsPage,
} from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route
            path="/aboutdomesticviolence"
            element={<AboutDomesticeViolencePage />}
          />
          <Route path="/posts" element={<CommunityPage />} />
          <Route path="/posts/:_id" element={<PostPage />} />
          <Route path="/counselingcenter" element={<CounselingCenterPage />} />
          <Route path="/campaigns" element={<CampaignsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
