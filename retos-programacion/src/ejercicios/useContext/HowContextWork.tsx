
// un hook de React que te permite compartir datos o estados entre componentes 

import Profile from "./components/Profile"
import UserList from "./components/UserList"
import UserState from "./context/user/userState"

// sin necesidad de pasarlos manualmente por cada nivel de props
const HowContextWork = () => {
  return (
    <div>
      {/* todo lo que este dentro del contexto se puede acceder desde cualquier componente */}
        <UserState>

        <Profile />
        <UserList />

        </UserState>
    </div>
  )
}

export default HowContextWork