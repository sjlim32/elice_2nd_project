import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function SuppoterInfo() {
  return (
    <div>
      <Button>
        <StyledLink to="/users/changeuserinfo">개인 정보 수정</StyledLink>
      </Button>

      <Button>
        <StyledLink to="/users/userwithdrawal">회원 탈퇴</StyledLink>
      </Button>

      <Button>
        <StyledLink>나의 활동 내역</StyledLink>
      </Button>
    </div>
  );
}

const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 15px;
  background-color: #3e4e34;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  &:hover {
    color: #baeb34;
  }
`;

export default SuppoterInfo;
