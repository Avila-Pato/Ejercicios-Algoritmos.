import {  useContext, useEffect } from 'react'
import UserContext from '../context/user/userContext'

const Profile = () => {
  const { getProfile, selectedUser } = useContext( UserContext )

  useEffect(() => {
    getProfile(1)
  }, [getProfile])
  return (
    <div>
        <h1>Perfil</h1>
        <p>{selectedUser?.name}</p>
    </div>
  )
}

export default Profile