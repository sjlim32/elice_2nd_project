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
          password: password,
          newPassword: newPassword,
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
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        id="newPassword"
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />

      <input
        id="confirmPassword"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button id="submit" onClick={handleSubmit}>
        수정하기
      </button>
    </div>
  );
}

export default ChangePassword;
