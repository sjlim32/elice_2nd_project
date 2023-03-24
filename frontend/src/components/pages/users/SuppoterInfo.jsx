import React from "react";
import { Link } from "react-router-dom";

function SuppoterInfo() {
  return (
    <div>
      <button>
        <Link to="/users/changeuserinfo">개인 정보 수정</Link>
      </button>

      <button>
        <Link to="/users/userwithdrawal">회원 탈퇴</Link>
      </button>

      <button>
        <Link>나의 활동 내역</Link>
      </button>
    </div>
  );
}

export default SuppoterInfo;
