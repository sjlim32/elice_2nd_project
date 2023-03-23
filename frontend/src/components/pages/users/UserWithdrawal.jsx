import React, { useState } from "react";
import * as API from "../../../utils/api";

function UserWithdrawal() {
  const [isChecked, setIsChecked] = useState(false);
  const [password, setPassword] = useState("");

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.delete(`/users`, password);
      console.log(res.data);
    } catch (err) {
      alert("error");
    }
  };

  return (
    <div>
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />

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
