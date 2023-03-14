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
      path: "/comunity",
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

  const token = false;

  return (
    <NavContainer>
      <Link to="/">
        <LogoImg src={logo} alt="logo"></LogoImg>
      </Link>
      <Container>
        {/* <RegisterLoginWrapper>
          <Link to="/users/register">회원가입</Link>
          <Link to="/users/login">로그인</Link>
        </RegisterLoginWrapper> */}
        <MypageLogoutWrapper>
          {token == true ? (
            <>
              <Link to="/users/mypage">마이페이지</Link>
              <Link to="/users/logout">로그아웃</Link>
            </>
          ) : (
            <>
              {" "}
              <Link to="/users/register">회원가입</Link>
              <Link to="/users/login">로그인</Link>
            </>
          )}
        </MypageLogoutWrapper>
        <MenuWrapper>
          {menuObj.map(({ name, path }) => (
            <Link to={path}>
              <div key={name}>{name}</div>
            </Link>
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
  gap: 10px;
  margin-top: auto;
  font-size: 30px;
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
