import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/logo_transparent.png";

function NavigationBar() {
  const menuObj = [
    {
      name: "24/7 소개",
      path: "/aboutus",
    },
    {
      name: "가정폭력이란?",
      path: "/aboutdomesticviolence",
    },
    {
      name: "이야기 광장",
      path: "/posts",
    },
    {
      name: "상담소 찾기",
      path: "/counselingcenter",
    },
    {
      name: "캠페인",
      path: "/campaigns",
    },
  ];

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("email");
    window.location.reload();
  };

  return (
    <NavContainer>
      <Link to="/">
        <LogoImg src={logo} alt="logo"></LogoImg>
      </Link>
      <Container>
        <MypageLogoutWrapper>
          {role === "admin" ? (
            <>
              <StyledLink to="/admin">관리자페이지</StyledLink>
              <StyledLink onClick={handleLogout}>로그아웃</StyledLink>
            </>
          ) : token ? (
            <>
              <StyledLink to="/users/mypage">마이페이지</StyledLink>
              <StyledLink onClick={handleLogout}>로그아웃</StyledLink>
            </>
          ) : (
            <>
              <StyledLink to="/users/register">회원가입</StyledLink>
              <StyledLink to="/users/login">로그인</StyledLink>
            </>
          )}
        </MypageLogoutWrapper>
        <MenuWrapper>
          {menuObj.map(({ name, path }) => (
            <StyledLink to={path} key={path}>
              <div key={name}>{name}</div>
            </StyledLink>
          ))}
        </MenuWrapper>
      </Container>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  background-color: yellowgreen;
`;

const MenuWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-top: auto;
  font-size: 30px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const LogoImg = styled.img`
  width: 200px;
  height: 100%;
`;

const MypageLogoutWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default NavigationBar;
