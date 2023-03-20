import React, {useState} from "react";
import UserRegisterForm from "../components/pages/users/UserRegisterForm";
import SuppoterRegisterForm from "../components/pages/users/SuppoterRegisterForm";
import styled from "styled-components";

function Register() {
    const [isUser, setIsUser] = useState(true)

    return (
        <div className="tabs">
            <input id='user' type='radio' className="tab_item" checked onClick={() => setIsUser(true)}/>
            <label for='user'>User</label>
            <input id='suppoter' type='radio' className="tab_item" onClick={() => setIsUser(false)}/>
            <label for='suppoter'>Suppoter</label>
            {isUser ? (
                <UserRegisterForm />
            ) : (
                <SuppoterRegisterForm />
            )}
        </div>
    )
}

export default Register;

const tabs = styled.div`
    width: 700px;
    border: 1px solid #FFFFFF;
`

const tab_item = styled.div`
    display: none;
`