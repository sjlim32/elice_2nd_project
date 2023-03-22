import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios'
import DaumPost from "./DaumPostcode";
import PopupDom from './PopupDom.jsx'

function ChangeUserInfo() {
  const [users, setUsers] = useState([]);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState("");
  const [zonecode, setZonecode] = useState("");
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPostcode = useCallback(() => {
    setIsPopupOpen(!isPopupOpen)
  }, [isPopupOpen])

  useEffect(() => {
    axios
      .get(`/api/users/:userId`)
      .then((res) => {
        setUsers(res.data);
        if (res.data.address) {
          setZonecode(res.data.address.zonecode);
          setAddress(res.data.address.address);
          setDetailAddress(res.data.address.detailAddress);
        }
      })
      .catch(() => alert('error'));
  }, []);


  const validatePassword = () => {
    if (newPassword !== confirmPassword) {
      console.log('password is not confirmed');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validatePassword()) {
      try {
        const res = await axios.get('/api/users')
        const userID = res.data._id

        const res2 = await axios.patch('/api/users', {
                    password: password,
                    newPassword: newPassword,
                    phone: phone,
                    address: {
                        zonecode,
                        address,
                        detailAddress,
                    },
                })
        console.log(res2.data)
        alert('update success')
      } catch(err) {
        alert('error')
      }
    }
  };

  return (
    <div>
        <input
            id='email'
            placeholder={users.email}
            disabled
        />

        <input
            id='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />

        <input
            id='newPassword'
            type='password'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
        />

        <input 
            id='confirmPassword'
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <input 
            id='username'
            placeholder={users.userName}
            disabled
        />

        <input
            id="phone"
            type="text"
            placeholder={users.phone}
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
        <input id="zonecode" placeholder={zonecode} disabled />
        <input id="address" placeholder={address} disabled />
        <input
            id="detailAddress"
            placeholder={detailAddress}
            onChange={(e) => setDetailAddress(e.target.value)}
        />

        <button id='submit' onSubmit={handleSubmit}>수정하기</button>
    </div>
  )
}

export default ChangeUserInfo