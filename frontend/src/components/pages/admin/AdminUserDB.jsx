import React, { useState } from "react";
import * as API from "../../../utils/api";

async function AdminUserDB() {
  const [users, setUsers] = useState([]);

  try {
    const res = await API.get("/admin/users/userRole/:userRole");
    setUsers(res.data);
  } catch (err) {
    alert(err);
  }

  const UserDB = ({ user }) => {
    return (
      <tr key={user.email}>
        <td>{user.role}</td>
        <td>{user.email}</td>
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
          {users.map((user) => {
            return <UserDB user={user} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AdminUserDB;
