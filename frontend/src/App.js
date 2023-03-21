import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/commons/layout";
import ChangeUserInfo from "./components/pages/users/ChangeUserInfo";
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
import UserLoginForm from './components/pages/users/UserLoginForm'

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
          <Route path='/users/register' element={<Register />} />
          <Route path='/users/changeuserinfo' element={<ChangeUserInfo />} />
          <Route path='/users/login' element={<UserLoginForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
