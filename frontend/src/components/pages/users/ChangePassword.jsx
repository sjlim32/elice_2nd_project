import React, { useState } from "react";
import * as API from "../../../utils/api";

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

      <button id="submit" onClick={handleSubmit}>
        수정하기
      </button>
    </div>
  );
}

export default ChangePassword;
