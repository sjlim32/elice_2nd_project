import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/commons/layout";
import {
  MainPage,
  AboutUsPage,
  AboutDomesticViolencePage,
  CommunityMainPage,
  PostingPage,
  PostPage,
  CounselingPage,
  CounselingCenterPage,
  CampaignsPage,
  Register,
} from "./pages";
<<<<<<< HEAD
=======
import SuppoterRegisterForm from "./components/pages/users/SuppoterRegisterForm";
>>>>>>> 5c8f4f9e84c00f1db820d6b528b35a5f5e092629

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route
            path="/aboutdomesticviolence"
            element={<AboutDomesticViolencePage />}
          />
          <Route path="/posts" element={<CommunityMainPage />} />
          <Route path="/Posts/:_id" element={<PostPage />} />
          <Route path="/posts/write" element={<PostingPage />} />
          <Route
            path="/posts/category/:category"
            element={<CommunityMainPage />}
          />
          <Route path="/counseling" element={<CounselingPage />} />
          <Route path="/counselingcenter" element={<CounselingCenterPage />} />
          <Route path="/campaigns" element={<CampaignsPage />} />
<<<<<<< HEAD
          <Route path='/users/register' element={<Register />} />
=======
          <Route path="/users/register" element={<SuppoterRegisterForm />} />
>>>>>>> 5c8f4f9e84c00f1db820d6b528b35a5f5e092629
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
