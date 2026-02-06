
// un hook de React que te permite compartir datos o estados entre componentes 

import Profile from "./components/Profile"
import UserList from "./components/UserList"

// sin necesidad de pasarlos manualmente por cada nivel de props
const HowContextWork = () => {
  return (
    <div>
        <Profile />
        <UserList />
    </div>
  )
}

export default HowContextWork