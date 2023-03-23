import React, { useState } from "react";
import * as API from "../../../utils/api";

async function postDB() {
  const [postList, setPostList] = useState([]);

  try {
    const res = await API.get("/users/:userId");
    setPostList(res.data);
  } catch (err) {
    alert("error");
  }

  const postingList = ({ post }) => {
    return (
      <tr key={post.title}>
        <td>{post.title}</td>
        <td>{post.date}</td>
      </tr>
    );
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {postList.map((post) => {
            return <postingList post={post} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default postDB;
