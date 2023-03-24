import React, { useState } from "react";
import * as API from "../../../utils/api";

async function PostDB() {
  const [postList, setPostList] = useState("");

  try {
    const res = await API.get("/myposts");
    setPostList(res.data);
    console.log(postList);
  } catch (err) {
    alert(err);
  }

  const PostingList = ({ post }) => {
    return (
      <tr key={post._id}>
        <td>{post._id}</td>
        <td>{post.title}</td>
      </tr>
    );
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Post ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default PostDB;
