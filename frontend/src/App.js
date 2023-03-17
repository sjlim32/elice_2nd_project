import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/commons/layout";
import {
  MainPage,
  AboutUsPage,
  AboutDomesticeViolencePage,
  CommunityPage,
  PostingPage,
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
          <Route path="/Posts/:_id" element={<PostPage />} />
          <Route path="/posts/write" element={<PostingPage />} />
          <Route path="/posts/category/:category" element={<CommunityPage />} />
          <Route path="/counselingcenter" element={<CounselingCenterPage />} />
          <Route path="/campaigns" element={<CampaignsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
