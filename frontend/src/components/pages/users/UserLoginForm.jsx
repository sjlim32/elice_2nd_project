import React, { useState } from "react";
import * as API from "../../../utils/api";
import { useNavigate } from "react-router-dom";

function UserLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email, password };
    try {
      const res = await API.post("/login", userData);
      localStorage.setItem("token", res.data.accessToken);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("email", res.data.email);
      alert("로그인 성공 !")
      navigate("/");
      window.location.reload();
    } catch (err) {
      if (err.response) {
        alert(err.response.data)
        window.location.reload();
      } else {
        alert("로그인에 실패했습니다.")
      }
    }
  };

  return (
    <div>
      <input
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button id="submit" onClick={handleSubmit}>
        로그인
      </button>
    </div>
  );
}

export default UserLoginForm;
