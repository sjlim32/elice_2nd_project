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
  ModifyPage,
  CounselingPage,
  CounselingCenterPage,
  CampaignsPage,
  Register,
} from "./pages";
import UserLoginForm from "./components/pages/users/UserLoginForm";
import UserInfo from "./components/pages/users/UserInfo";
import ChangePassword from "./components/pages/users/ChangePassword";

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
          <Route path="/posts/:_id" element={<PostPage />} />
          <Route path="/posts/write" element={<PostingPage />} />
          <Route path="/posts/modify/:_id" element={<ModifyPage />} />
          <Route
            path="/posts/category/:category"
            element={<CommunityMainPage />}
          />
          <Route path="/counseling" element={<CounselingPage />} />
          <Route path="/counselingcenter" element={<CounselingCenterPage />} />
          <Route path="/campaigns" element={<CampaignsPage />} />
          <Route path="/users/register" element={<Register />} />
          <Route path="/users/changeuserinfo" element={<ChangeUserInfo />} />
          <Route path="/users/login" element={<UserLoginForm />} />
          <Route path="/users/userinfo" element={<UserInfo />} />
          <Route path="/users/changepassword" element={<ChangePassword />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
