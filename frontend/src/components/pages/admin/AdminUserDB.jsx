import React, { useState, useEffect } from "react";
import * as API from "../../../utils/api";

function AdminUserDB() {
  const [users, setUsers] = useState([]);
  const [role, setRole] = useState("user");

  useEffect(() => {
    (async () => {
      try {
        const res = await API.get(`/admin/users/userRole/${role}`);
        setUsers(res.data);
      } catch (err) {
        alert(err);
      }
    })();
  }, [role]);

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
      <label>
        <input
          type="radio"
          value="user"
          checked={role === "user"}
          onChange={(e) => {
            setRole("user");
          }}
        />
        User
      </label>
      <label>
        <input
          type="radio"
          value="supporter"
          checked={role === "support"}
          onChange={(e) => {
            setRole("support");
          }}
        />
        Supporter
      </label>
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
