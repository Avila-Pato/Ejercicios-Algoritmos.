import { createContext } from "react";
import type { User } from "./useReducer";

type UserContextType = {
    users: User[]
    selectedUser: User | null
    getUsers: () => Promise<void>
    getProfile: (id: number) => Promise<void>
}

const UserContext = createContext<UserContextType>({} as UserContextType);

export default UserContext