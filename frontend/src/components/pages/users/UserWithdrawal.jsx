import React, { useState } from "react";
import * as API from "../../../utils/api";
import { useNavigate } from "react-router-dom";

function UserWithdrawal() {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.delete(`/users`);
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("email");
      console.log(res.data);
      navigate("/");
      window.location.reload();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        label="회원을 탈퇴하시겠습니까?"
        onClick={handleClick}
      />
      {!isChecked ? (
        <button disabled>회원 탈퇴</button>
      ) : (
        <button onClick={handleSubmit}>회원 탈퇴</button>
      )}
    </div>
  );
}

export default UserWithdrawal;
