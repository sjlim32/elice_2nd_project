import React, {useCallback, useState} from "react"
import DaumPost from "./DaumPostcode";
import PopupDom from './PopupDom.jsx'
import * as API from '../../../utils/api'

function SuppoterRegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [zonecode, setZonecode] = useState("");
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [error, setError] = useState("");

  const openPostcode = useCallback(() => {
    setIsPopupOpen(!isPopupOpen)
  }, [isPopupOpen])

  const validateEmail = useCallback(() => {
    const emailForm = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (emailForm.test(email) == false) {
      setError("invalide Email Address");
      return false;
    }
    return true;
  }, [email]);

  const validatePassword = useCallback(() => {
    if (password !== confirmPassword) {
      setError("password is not confirmed");
      return false;
    }
    return true;
  }, [password, confirmPassword]);

  const validateForm = () => {
    return validateEmail() && validatePassword();
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const userData = {
      role: "pending",
      email,
      password,
      userName: name,
      phoneNumber: phone,
      address: {
        zonecode,
        address,
        detailAddress,
      },
    };
    const validateResult = validateForm();
    if (validateResult) {
      try {
        const res = await API.post('/api/users', userData)
        console.log(res.data)
      } catch(err) {
        alert(error)
      }
    }
  };

  return (
    <div>
      <input
        id="email"
        value={email}
        placeholder="abc@abc.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button id="checkEmail">중복 확인</button>

      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        id="confirmPassword"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        id="phone"
        type="text"
        placeholder="-없이 숫자로만 입력해 주세요"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button id="postcode" onClick={openPostcode}>
        우편번호 검색
      </button>
      <div id="popupDom">
        {isPopupOpen && (
          <PopupDom>
            <DaumPost
              done={(data) => {
                setZonecode(data.zonecode);
                setAddress(data.address);
              }}
            />
          </PopupDom>
        )}
      </div>
      <input id="zonecode" value={zonecode} disabled />
      <input id="address" value={address} disabled />
      <input
        id="detailAddress"
        value={detailAddress}
        onChange={(e) => setDetailAddress(e.target.value)}
      />

      <button id="submit" onSubmit={handleSubmit}>
        가입하기
      </button>
    </div>
  );
}

export default SuppoterRegisterForm;
