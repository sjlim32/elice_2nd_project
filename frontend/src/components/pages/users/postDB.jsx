import React, { useState } from "react";
import axios from "axios";

async function postDB() {
    const [postList, setPostList] = useState([])

    try {
        const res = await axios.get('/users/:userId')
        setPostList(res.data)
    } catch(err) {
        alert('error')
    }

    return (
        <div>
            {postList.map((post) => {
                return post.title + post.date
            })}
        </div>
    )
}

export default postDB