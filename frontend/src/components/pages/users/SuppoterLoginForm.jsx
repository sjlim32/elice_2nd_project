import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as API from "../../../utils/api";

function SuppoterLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  /*
  유저 로그인과 다르게 db에 저장되어 있는지 확인한 후
  1. 저장되어 있으면 로그인 가능
  2. 저장되어 있지만 미승인인 경우 alert으로 승인을 기다리라고 안내
  3. 저장이 안되어 있으면 alert으로 가입을 하라고 안내
  위에 대한 부분 추가 구현 필요
  */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email, password };
    try {
      const res = await API.post("/login", userData);
      localStorage.setItem("token", res.data.accessToken);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("email", res.data.email);
      navigate("/");
      window.location.reload();
    } catch (err) {
      alert("error");
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

      <button id="submit" onSubmit={handleSubmit}>
        로그인
      </button>
    </div>
  );
}

export default SuppoterLoginForm;
