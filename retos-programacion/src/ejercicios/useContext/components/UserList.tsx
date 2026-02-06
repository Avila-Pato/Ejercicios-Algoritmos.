import React, { useContext, useEffect } from 'react'
import UserContext from '../context/user/userContext'

const UserList = () => {
    const { getUsers, users } = useContext( UserContext)

    useEffect(() => {
        getUsers()
        
    }, [ getUsers ])
  return (
    <div>
        <h1>Lista de Usuarios</h1>
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default UserList