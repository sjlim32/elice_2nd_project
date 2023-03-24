import React from "react";
import { Link } from "react-router-dom";

function AdminMain() {
  return (
    <div>
      <button>
        <Link to="/admin/requestapprove">서포터 신청 승인</Link>
      </button>

      <button>
        <Link>서포터 상담 내역</Link>
      </button>

      <button>
        <Link to="/admin/userdb">서포터 / 유저 관리</Link>
      </button>
    </div>
  );
}

export default AdminMain;
