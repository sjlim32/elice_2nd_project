import React, { useState } from "react";
import axios from "axios";

async function AdminUserDB() {
    const [users, setUsers] = useState([])
    
    try {
        const res = await axios.get('/admin/users/userRole')
        setUsers(res.data)
    } catch(err) {
        alert('error')
    }

    const UserDB = ({user}) => {

        return (
            <tr key={user.email}>
                <td>{user.role}</td>
                <td>{user.email}</td>
            </tr>
        )
    }

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
                        return <UserDB user={user} />
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AdminUserDB