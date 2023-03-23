import React, { useState } from "react";
import * as API from "../../../utils/api";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UserLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email, password };
    try {
      const res = await API.post("/login", userData);
      localStorage.setItem("jwt", res.data);
      console.log(res.data);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${res.data.access_token}`;
      navigate("/");
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

      <button id="submit" onClick={handleSubmit}>
        로그인
      </button>
    </div>
  );
}

export default UserLoginForm;
