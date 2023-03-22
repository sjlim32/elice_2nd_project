import React from "react";
import { Link } from "react-router-dom";

function UserInfo() {

    return (
        <div>
            <button>
                <Link to='/users/changepassword'>비밀번호 변경</Link>
            </button>

            <button>
                <Link to='/users/userwithdrawal'>회원 탈퇴</Link>
            </button>

            <button>
                <Link >나의 상담 내역</Link>
            </button>

            <button>
                <Link >나의 활동 내역</Link>
            </button>
        </div>
    )
}

export default UserInfo