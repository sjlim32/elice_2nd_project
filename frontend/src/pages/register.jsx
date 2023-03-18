import React, {useState} from "react";
import UserRegisterForm from "../components/pages/users/UserRegisterForm";
import SuppoterRegisterForm from "../components/pages/users/SuppoterRegisterForm";

function Register() {
    const [isUser, setIsUser] = useState(true)

    return (
        <div>
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