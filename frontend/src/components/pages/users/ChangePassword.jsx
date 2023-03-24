import React, { useState } from "react";
import * as API from "../../../utils/api";
import styled from "styled-components";

function ChangePassword() {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validatePassword = () => {
    if (newPassword !== confirmPassword) {
      console.log("password is not confirmed");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validatePassword()) {
      try {
        const res = await API.patch("/users", {
          currentPassword: password,
          password: newPassword,
        });
        console.log(res.data);
        alert("update success");
      } catch (err) {
        alert(err);
      }
    }
  };

  return (
    <div>
      <div>
        기존 패스워드
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        새 패스워드
        <input
          id="newPassword"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>

      <div>
        새 패스워드 확인
        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <EditButton id="submit" onClick={handleSubmit}>
        수정하기
      </EditButton>
    </div>
  );
}

const EditButton = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 15px;
  background-color: #3e4e34;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export default ChangePassword;
