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

  return (
    <NavContainer>
      <Link to="/">
        <LogoImg src={logo} alt="logo"></LogoImg>
      </Link>
      <div>
        <RegisterLoginWrapper>
          <Link to="/users/register">회원가입</Link>
          <Link to="/users/login">로그인</Link>
        </RegisterLoginWrapper>
        <MenuWrapper>
          {menuObj.map(({ name, path }) => (
            <Link to={path}>
              <div key={name}>{name}</div>
            </Link>
          ))}
        </MenuWrapper>
      </div>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
`;

const MenuWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const LogoImg = styled.img`
  width: 200px;
  height: 100%;
`;

const RegisterLoginWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export default NavigationBar;
