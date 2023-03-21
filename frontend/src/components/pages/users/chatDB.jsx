import React, { useState } from "react";
import axios from "axios";

async function chatDB() {
    const [chatList, setChatList] = useState([])

    try {
        const res = await axios.get('/users/:userId')
        setChatList(res.data)
    } catch(err) {
        alert('error')
    }

    return (
        <div>
            {chatList.map((chat) => {
                return chat.date + chat.time
            })}
        </div>
    )
}

export default chatDB